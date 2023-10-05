const joi = require('joi');

const validateVolunteerData = (data) => {
    const schema = joi.object({
        description: joi.string().required(),
        location: joi.string().required(),
        image: joi.string().required()
    });
    return schema.validate(data);
};

// const validateGeotaggedImage = (data) => {
//     const schema = joi.object({
//         latitude: joi.number().min(-90).max(90),
//         longitude: joi.number().min(-180).max(180),
//     });
//     return schema.validate(data);
// };

module.exports = {
    validateVolunteerData,
    // validateGeotaggedImage
};
