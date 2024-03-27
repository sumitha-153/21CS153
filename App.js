import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [avg, setAvg] = useState(null);

  useEffect(() => {
    fetchRandomNumbers();
  }, []);
  const fetchRandomNumbers = async () => {
    try {
        const token = 'DkAKTP';
        const number_id="numbers"
        const response = await axios.get('http://20.244.56.144/test/'+number_id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setNumbers(response.data.numbers);
        setWindowPrevState(response.data.windowPrevState);
        setWindowCurrState(response.data.windowCurrState);
        setAvg(response.data.avg);
    } catch (error) {
        console.log('Error fetching random numbers:', error.message);
    }
};


  return (
    <div className="App">
      <h1>Random Numbers Average Calculator</h1>
      <div>
        <h2>Numbers:</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Window Previous State:</h2>
        <ul>
          {windowPrevState.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Window Current State:</h2>
        <ul>
          {windowCurrState.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Average:</h2>
        <p>{avg}</p>
      </div>
      <button onClick={fetchRandomNumbers}>Fetch Random Numbers</button>
    </div>
  );
}

export default App;