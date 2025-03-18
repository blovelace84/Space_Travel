import React, { useState, useEffect } from 'react';
import PlanetSelector from '../components/PlanetSelector';
import SpeedInput from '../components/SpeedInput';
import CalculateButton from '../components/CalculationButton';
import CalculationResult from '../components/CalculationResult';
import Papa from 'papaparse'; //Import papaparse

function SpaceTravelPage() {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [speed, setSpeed] = useState('');
    const [travelTime, setTravelTime] = useState(null);

    const calculateTravelTime = (distance, speed) => {
        if (!distance || !speed) return null;
        return distance / speed;
    };

    const handlePlanetSelect = (planetName) => {
        const planet = planets.find((p) => p['Planet.name'] === planetName);
        setSelectedPlanet(planet);
    };

    const handleCalculate = () => {
        if (selectedPlanet && speed) {
            const time = calculateTravelTime(
                parseFloat(selectedPlanet['Distance from Earth (km)']),
                parseFloat(speed)
            );
            setTravelTime(time);
        }
    };

    useEffect(() => {
        fetch('/planets_rows.csv')
            .then((response) => response.text())
            .then((csv) => {
                Papa.parse(csv, {
                    header: true,
                    complete: (results) => {
                        setPlanets(results.data);
                    },
                });
            });
    }, []);

    return (
        <div>
            <h1>Space Travel Calculator</h1>
            <PlanetSelector planets={planets} selectedPlanet={selectedPlanet} onSelect={handlePlanetSelect} />
            <SpeedInput speed={speed} onChange={(value) => setSpeed(value)} />
            <CalculateButton onClick={handleCalculate} />
            <CalculationResult travelTime={travelTime} />
        </div>
    );
}

export default SpaceTravelPage;