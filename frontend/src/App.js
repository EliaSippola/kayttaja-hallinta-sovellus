// src/App.js
import React from 'react';
// Tuodaan kaikki komponentit sovellukseen
import Register from './components/Register';
import './App.css';

// App-komponentti on sovelluksen pääkomponentti
function App() {
    return (
        <div className="App">
            <h1>Käyttäjien hallintajärjestelmä</h1>
{/* Rekisteröintikomponentti */}
            <Register />
        </div>
    );
}
export default App;

