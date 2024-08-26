// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link ,Routes} from 'react-router-dom';
// Tuodaan kaikki komponentit sovellukseen
import Register from './components/Register';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import './App.css';

// App-komponentti on sovelluksen pääkomponentti
function App() {
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
                    <Route path="/kirjautuminen" element={<Login />} />
                    <Route path="/käyttäjät" element={<UserManagement />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;

