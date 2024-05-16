const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

app.use(express.json());

app.post('/api/calculate', async (req, res) => {
    const { location } = req.body;
    try {
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
        const windSpeed = weatherResponse.data.wind.speed;
        
        const turbinePower = calculatePower(windSpeed);
        res.json({ location, windSpeed, turbinePower });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve weather data' });
    }
});

function calculatePower(windSpeed) {
    const turbineEfficiency = 0.35;
    const turbineArea = Math.PI * Math.pow(1.5, 2); // Radius of 1.5 meters
    const airDensity = 1.225; // kg/m^3
    const power = 0.5 * airDensity * turbineArea * Math.pow(windSpeed, 3) * turbineEfficiency;
    return Math.min(power, 350); // Max power output of 350 watts
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
