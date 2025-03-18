import React from "react";

const CalculationResult = ({ travelTime }) => {
    return travelTime !== null && <p>Travel Time: {travelTime.toFixed(2)} hours</p>;
}

export default CalculationResult;