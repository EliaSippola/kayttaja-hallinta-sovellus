// src/components/Register.js
import React, { useState } from 'react';

// Login-komponentti käsittelee käyttäjän kirjautumisen
function Login() {
    // useState hook luo tilan kirjautumistiedoille: käyttäjänimi ja salasana
    const [credentials, setCredentials] = useState({ username: '', password: ''});
    // handleChange-funktio päivittää tilan, kun käyttäjä muuttaa lomakkeen kenttää
    const handleChange = (e) => {
        // Päivitetään vastaava kenttä tilassa
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    // handleSubmit-funktio käsittelee lomakkeen lähetyksen

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tulostetaan rekisteröityneen käyttäjän tiedot konsoliin
        console.log('Käyttäjä kirjautunut:', credentials);
        // Näytetään ilmoitus onnistuneesta rekisteröinnistä
        alert('Käyttäjä kirjautui onnistuneesti');
    };
    // Lomakkeen renderöinti
    return (
        <div>
            <h2>Kirjaudu sisään</h2>
             {/* Lomakkeen lähetys kutsuu handleSubmit-funktiota */}
            <form onSubmit={handleSubmit}>
                <label>
                Käyttäjänimi:
                    {/* Tekstikenttä, joka päivittää username-tilan */}
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Salasana:
                    {/* Salasanojen syöttökenttä, joka päivittää password-tilan */}
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {/* Rekisteröinti-painike */}
                <button type="submit">Kirjaudu</button>
            </form>
        </div>
    );
}
export default Login;
