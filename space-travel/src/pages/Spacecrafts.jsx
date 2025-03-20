import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function Spacecrafts() {
  const [spacecraftData, setSpacecraftData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromCsv() {
      try {
        const response = await fetch('/spacecrafts_rows.csv');
        const text = await response.text();

        Papa.parse(text, {
          header: true, // Treat the first row as headers
          complete: (results) => {
            setSpacecraftData(results.data);
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
      <h2>Spacecrafts</h2>
      <div className="spacecraft-list">
        {spacecraftData.map((spacecraft) => (
          <div key={spacecraft.id} className="spacecraft-item">
            <img src={spacecraft.image_url} alt={spacecraft.name} />
            <h3>{spacecraft.name}</h3>
            <p>
              <strong>Type:</strong> {spacecraft.type}
            </p>
            <p>{spacecraft.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Spacecrafts;