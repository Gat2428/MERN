/* Steps:-
Install node.js
Open VS Code
Click Terminal → New Terminal
Run the command
npx create-react-app myapp
cd myapp
code .
code . opens project in VS Code
npm install axios*/

//Update src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Update src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataCollector() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://dummy.restapiexample.com/api/v1/employees"
            );
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Data Collection</h2>

            <button onClick={fetchData}>Fetch Data</button>

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.employee_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataCollector; 

/*Output
In VS Code terminal type:-
npm start
Browser opens automatically
URL: http://localhost:3000*/
