import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Planets.css';

function Planets() {
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromCsv() {
      try {
        const response = await fetch('/planets_rows.csv');
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          complete: (results) => {
            setPlanetData(results.data);
            setLoading(false);
          },
          error: (err) => {
            setError(err);
            setLoading(false);
          },
        });
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchDataFromCsv();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <h2>Planets</h2>
      <div className="planet-list">
        {planetData.map((planet) => (
          <div key={planet.id} className="planet-item">
            <img src={planet.image_url} alt={planet.name} />
            <h3>{planet.name}</h3>
            <p>
              <strong>Diameter:</strong> {planet.diameter}
            </p>
            <p>
              <strong>Distance:</strong> {planet.distance}
            </p>
            {/* Add other planet properties here as needed */}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Planets;