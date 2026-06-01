/*Steps:-
Install node js
Open VS Code terminal and run:
npx create-react-app search-filter
cd search-filter
code .
Create Required Files
Inside src folder, create:
SearchFilter.js
data.json*/


//Open index.js Replace with:
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

//Open app.js and replace with :-
import React from "react";
import SearchFilter from "./SearchFilter";

function App() {
  return (
    <div>
      <h1>Simple Search Filter</h1>
      <SearchFilter />
    </div>
  );
}

export default App;

//SearchFilter.js

import React, { useState } from "react";
import data from "./data.json";

function SearchFilter() {

  const [query, setQuery] = useState("");

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.category}
          </li>
        ))}

        {filteredItems.length === 0 && <p>No items found</p>}
      </ul>

    </div>
  );
}

export default SearchFilter;

//data.json
[
  { "name": "Banana", "category": "Fruit" },
  { "name": "Carrot", "category": "Vegetable" },
  { "name": "Beans", "category": "Vegetable" },
  { "name": "Brinjal", "category": "Vegetable" },
  { "name": "Pineapple", "category": "Fruit" }
]

/*Output
Run the React App
Open Terminal
npm start
Browser will open automatically:
http://localhost:3000*/
