import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Spacecraft.css';

function Spacecrafts() {
  const [spacecraftData, setSpacecraftData] = useState([]); // From CSV, for reference
  const [customSpacecrafts, setCustomSpacecrafts] = useState([]);
  const [newSpacecraft, setNewSpacecraft] = useState({ name: '', type: '' });
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [planetData, setPlanetData] = useState([]); // Add planet data state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromCsv() {
      try {
        const response = await fetch('/spacecrafts_rows.csv');
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          complete: (results) => {
            setSpacecraftData(results.data);
            setLoading(false);
          },
          error: (err) => {
            setError(err);
            setLoading(false);
          },
        });

         //Fetch planet data
         const planetResponse = await fetch('/planets_rows.csv');
         const planetText = await planetResponse.text();

         Papa.parse(planetText, {
           header: true,
           complete: (results) => {
             setPlanetData(results.data);
           },
           error: (err) => {
             setError(err);
           },
         });
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchDataFromCsv();
  }, []);

  const handleInputChange = (e) => {
    setNewSpacecraft({ ...newSpacecraft, [e.target.name]: e.target.value });
  };

  const handleCreateSpacecraft = () => {
    setCustomSpacecrafts([...customSpacecrafts, { ...newSpacecraft, id: Date.now(), planet: '' }]);
    setNewSpacecraft({ name: '', type: '' }); // Reset form
  };

  const handleTravel = (spacecraftId) => {
    setCustomSpacecrafts(
      customSpacecrafts.map((spacecraft) =>
        spacecraft.id === spacecraftId ? { ...spacecraft, planet: selectedPlanet } : spacecraft
      )
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <h2>Spacecrafts</h2>

      {/* Spacecraft Creation Form */}
      <div>
        <h3>Create Your Spacecraft</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className='spacecraft-container'
          value={newSpacecraft.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          className='spacecraft-container'
          value={newSpacecraft.type}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateSpacecraft}>Create Spacecraft</button>
      </div>

      {/* Planet Selection and Travel */}
      <div>
        <h3>Travel to Planet</h3>
        <select value={selectedPlanet} onChange={(e) => setSelectedPlanet(e.target.value)}>
          <option value="">Select Planet</option>
          {planetData.map((planet) => (
            <option key={planet.id} value={planet.name}>
              {planet.name}
            </option>
          ))}
        </select>

        {/* Display Created Spacecrafts */}
        <div className="custom-spacecraft-list">
          <h3>Your Spacecrafts</h3>
          {customSpacecrafts.map((spacecraft) => (
            <div key={spacecraft.id} className="custom-spacecraft-item">
              <p>Name: {spacecraft.name}, Type: {spacecraft.type}</p>
              {spacecraft.planet ? (
                <p>Traveling to: {spacecraft.planet}</p>
              ) : (
                <button onClick={() => handleTravel(spacecraft.id)}>Travel</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Display CSV Spacecraft Data (Optional) */}
      <div className="spacecraft-list">
        {spacecraftData.map((spacecraft) => (
          <div key={spacecraft.id} className="spacecraft-item">
            <img src={spacecraft.image_url} alt={spacecraft.name} />
            <h3>{spacecraft.name}</h3>
            <p>
              <strong>Type:</strong> {spacecraft.type}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Spacecrafts;