// src/App.js
import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; Switchiä ei voi käyttää, koska se on vanhentunut. Sen sijaan käytetään Routesia.
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

// Tuodaan kaikki komponentit sovellukseen
import Register from './components/Register';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import Services from './components/Services';
import './App.css';

// App-komponentti on sovelluksen pääkomponentti
function App() {

    const [user, sUser] = useState({ name: '', password: ''});

    function getUser() {
        return user;
    }

    function setUser(dict) {
        sUser(dict);
    }

    return (
        <Router>
            <div className="App">
                <h1>Käyttäjien hallintajärjestelmä</h1>
                {/* Navigointipalkki */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Kotisivu</Link>
                        </li>
                        <li>
                            <Link to="/rekisteröinti">Rekisteröinti</Link>
                        </li>
                        <li>
                            <Link to="/kirjautuminen">Kirjautuminen</Link>
                        </li>
                        <li>
                            <Link to="/käyttäjät">Käyttäjien hallinta</Link>
                        </li>
                    </ul>
                </nav>

                {/* Reititykset */}
                <Routes>
                    <Route path="/" element={
                        <div>
                            <h2>Tervetuloa käyttäjien hallintajärjestelmään</h2>
                            <p>Ole hyvä ja navigoi käyttämällä yllä olevaa valikkoa.</p>
                        </div>
                    } />
                    <Route path="/rekisteröinti" element={<Register />} />
                    <Route path="/kirjautuminen" element={<Login getUser={getUser} setUser={setUser} />} />
                    <Route path="/käyttäjät" element={<UserManagement getUser={getUser} setUser={setUser} />} />
                    <Route path="/palvelut" element={<Services getUser={getUser} setUser={setUser} />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;

