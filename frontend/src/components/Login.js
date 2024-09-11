// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import user from '../../../backend/models/user';

// Login-komponentti käsittelee käyttäjän kirjautumisen
function Login() {
    // useState hook luo tilan kirjautumistiedoille: käyttäjänimi ja salasana
    const [credentials, setCredentials] = useState({ username: '', password: ''});
    const [error, setError] = useState(null);
    const navigate = useNavigate ();
    // handleChange-funktio päivittää tilan, kun käyttäjä muuttaa lomakkeen kenttää
    const handleChange = (e) => {
        // Päivitetään vastaava kenttä tilassa
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    // handleSubmit-funktio käsittelee lomakkeen lähetyksen

    const handleSubmit = async (e) => {
        e.preventDefault()


        try{
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            console.log(response);
            if (response.ok) {
                // Jos kirjautuminen onnistui, ohjataan palvelut sivulle
                navigate('/palvelut');
            } else {
                throw new Error('Kirjautuminen epäonnistui')
            }

        } catch (err) {
            setError(err.message);
        }
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
                        required
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
                        required
                    />
                </label>
                <br />
                {/* Kirjautumis painike */}
                <button type="submit">Kirjaudu</button>
            </form>
        </div>
    );
}

export default Login;
