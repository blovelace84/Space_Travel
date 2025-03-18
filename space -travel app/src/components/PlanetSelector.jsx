import React from "react";

const PlanetSelector = ({ planets, selectedPlanet, onSelect }) => {
    return(
        <select value={selectedPlanet ? selectedPlanet.name : ''} onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select a Planet</option>
            {planets.map((planet) => (
                <option key={planet.name} value={planet.name}>
                    {planet.name}
                </option>
            ))}
        </select>
    );
}

export default PlanetSelector;