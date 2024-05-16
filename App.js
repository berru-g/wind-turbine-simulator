import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [location, setLocation] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/calculate', { location });
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <h1>Wind Turbine Simulator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                    required
                />
                <button type="submit">Calculate</button>
            </form>
            {result && (
                <div>
                    <h2>Results for {result.location}</h2>
                    <p>Wind Speed: {result.windSpeed} m/s</p>
                    <p>Estimated Power Output: {result.turbinePower} W</p>
                </div>
            )}
        </div>
    );
}

export default App;