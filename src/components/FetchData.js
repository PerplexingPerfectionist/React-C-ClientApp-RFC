import React, { useState, useEffect } from 'react';

function FetchData() {
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
        setLoading(false);
        return
    }

    useEffect(() => {
        populateWeatherData();
    }, []);

    function renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    return (
        loading ? <p><em>Loading...</em></p> :
            <>
                <div>
                    <h1 id="tabelLabel" >Weather forecast</h1>
                    <p>This component demonstrates fetching data from the server.</p>
                    {renderForecastsTable(forecasts)}
                </div>
            </>
    );
}

export default FetchData;