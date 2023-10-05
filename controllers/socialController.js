const SocialModel = require('../models/socialModel');
const axios = require('axios');

const processSocialData = (rawData) => {
    const processedData = rawData.map(item => ({
        text: item.text,
        user: item.user,
        created_at: item.created_at
    }));

    return processedData;
};

const saveToDB = (data) => {
    data.forEach(async item => {
        try {
            const socialItem = new SocialModel(item);
            await socialItem.save();
        } catch (error) {
            console.error('Error saving data to the database', error);
        }
    });
};

const mineSocial = async (req, res) => {
    try {
        // make request to twitter
        const response = await axios.get('twitter_api', {
            Headers: {
                Authorization: 'Bearer <Our API key>'
            },
            params: {
                keywords: 'fire',
                location: 'geographic-coordinates'
            }
        });

        // process relevant data
        const processedData = processSocialData(response.data);

        // store the data to the database
        saveToDB(processedData);
        return res.status(200).json({ data: processedData });
    } catch (error) {
        console.error('Error fetching social media data', error);
        return res.json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    mineSocial,
};
