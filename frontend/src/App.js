// src/App.js
import React from 'react';
// Tuodaan kaikki komponentit sovellukseen
import Register from './components/Register';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import './App.css';

// App-komponentti on sovelluksen pääkomponentti
function App() {
    return (
        <div className="App">
            <h1>Käyttäjien hallintajärjestelmä</h1>
{/* Rekisteröintikomponentti */}
            <Register />
{/* Kirjautumiskomponentti */}
            <Login />
{/* Käyttäjienhallintakomponentti */}
            <UserManagement />
        </div>
    );
}
export default App;

