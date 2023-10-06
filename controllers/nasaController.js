const axios = require('axios');

const validatewithNASAData = async (req, res) => {
    try {
        const nasaData = await axios.get('NASA_API_ENDPOINT_HERE');

        const prcoessedNASAData = processNASAData(nasaData);
        const validatedPoints = validatePointsWithNASA(req.body, prcoessedNASAData);
        return res.status(200).json({ validatedPoints });
    } catch (error) {
        return res.json({ messae: error })
    }
};

const processNASAData = (nasaData) => {
    return nasaData.map(item => ({
        latitude: item.lat,
        longitude: item.lon,
        confidence: item.confidence
    }));
};

const validatePointsWithNASA = (points, nasaData) => {
    return points.map(point => {
        const closestNASAData = findClosestNASAData(point, nasaData);
        const confidence = closestNASAData ? closestNASAData.confidence : 0;
        
        return {
            ...point,
            confidence
        };
    });
};

const findClosestNASAData = (point, nasaData) => {
    return nasaData.reduce((closest, current) => {
        const closestDistance = calculateDistance(point, closest);
        const currentDistance = calculateDistance(point, current);

        return currentDistance < closestDistance ? current : closest;
    }, null);
};

const calculateDistance = (point1, point2) => {
    return Math.abs(point1.latitude - point2.latitude) + Math.abs(point1.longitude - point2.longitude)
};

module.exports = {
    validatewithNASAData
};
