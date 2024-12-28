import React, { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState(null);
  const [savings, setSavings] = useState(null);

  // Fetch user data
  useEffect(() => {
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  // Fetch savings data
  const fetchSavings = () => {
    fetch('/api/calculate_savings')
      .then((response) => response.json())
      .then((data) => setSavings(data.savings));
  };

  return (
    <div className="App">
      <h1>AI-Driven Personal Finance Coach</h1>

      {userData ? (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Income: ${userData.income}</p>
          <h3>Expenses:</h3>
          <ul>
            {Object.entries(userData.expenses).map(([key, value]) => (
              <li key={key}>
                {key}: ${value}
              </li>
            ))}
          </ul>
          <button onClick={fetchSavings}>Calculate Savings</button>
          {savings !== null && <h3>Savings: ${savings}</h3>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
 
