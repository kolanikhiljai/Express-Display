import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const result = await response.json();
        setItems(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Express Data Display</h1>
      </header>

      {loading && <p className="status">Loading data...</p>}
      {error && <p className="status error">Error: {error}</p>}

      {!loading && !error && (
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
