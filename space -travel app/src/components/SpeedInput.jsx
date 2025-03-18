import React from "react";

const SpeedInput = ({ speed, onChange }) => {
    return(
        <input type="number" placeholder="Enter Speed (km/h)" value={speed} onChange={(e) =>(e.target.value)} />
    );
}

export default SpeedInput;