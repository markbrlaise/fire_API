const client = require('twilio');(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (req, res) => {
    const { to, message } = req.body;

    try {
        client.messages.create({
                body: message,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: to
        });
        return res.json({ message: 'SMS sent successfully', messageId: message.sid });
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
};

const sendwhatsApp = (req, res) => {
    const { to, message } = req.body;

    try {
        client.messages.create({
            body: message,
            from: 'whatsapp:' + process.env.TWILIO_PHONE_NUMBER,
            to: 'whatsapp:' + to
        });
        return res.json({ message: 'WhatsApp message sent successfully', messageId: message.sid });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    sendSMS,
    sendwhatsApp
};
