const axios = require('axois');
// require('dotenv').config();

const collectFireInfo = async(location, intensity) => {
    try {
        // send data to external API
        // axios.post('', { location, intensity })
    } catch (error) {
        console.error('Error collecting fire information', error);
    }
};

const provideFireInfo = async() => {
    try {
        const response = await axios.get('');
        return response.data.fireData;
    } catch (error) {
        console.error('Error providing fire information:', error);
        throw new Error('Failed to provide fire information');
    }
}

module.exports = {
    collectFireInfo,
    provideFireInfo,
};
