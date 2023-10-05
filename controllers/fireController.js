const Fire = require('../models/Fire');
const { validateVolunteerData } = require('../middleware/validation');
// to add services to handle the routes

const collectFireInfo = async (req, res) => {
    try {
        const { error, value } = validateVolunteerData(req.body)
        const { location, intensity } = req.body;
        const fireData = new Fire({ location, intensity });
        await fireData.save();
        res.status(200).json({ message: "Fire information collected successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Error occurred while collecting fire information' })
    }
};

const provideFireInfo = async(req, res) => {
    try {
        // fetch all fire data from database
        const fireData = await Fire.find();
        res.status(200).json({ fireData });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while providing fire information' });
    }
};

module.exports = {
    collectFireInfo,
    provideFireInfo,
};
