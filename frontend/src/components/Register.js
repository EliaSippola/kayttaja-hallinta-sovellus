// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';


// Register-komponentti käsittelee käyttäjän rekisteröinnin
function Register() {
    // useState hook luo tilan käyttäjän tiedoille: käyttäjänimi, salasana ja bio
    const [user, setUser] = useState({ username: '', password: '', bio: '' });
    // handleChange-funktio päivittää tilan, kun käyttäjä muuttaa lomakkeen kenttää
    const handleChange = (e) => {
        // Päivitetään vastaava kenttä tilassa
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    // handleSubmit-funktio käsittelee lomakkeen lähetyksen

    const handleSubmit = (e) => {
    
    if (user.username && user.password && user.bio) {
    e.preventDefault()
    axios.post(`http://localhost:3000/api/users`, {
    "name": user.username,
    "password": user.password,
    "bio": user.bio,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
    alert('Käyttäjä rekisteröityi onnistuneesti');
    }

    else {
        alert('Olet jättänyt kentän tyhjäksi');
    }
    };


    // Lomakkeen renderöinti
    return (
        <div>
            <h2>Rekisteröinti</h2>
             {/* Lomakkeen lähetys kutsuu handleSubmit-funktiota */}
            <form onSubmit={handleSubmit}>
                <label>
                Käyttäjänimi:
                    {/* Tekstikenttä, joka päivittää username-tilan */}
                    <input
                        type="text"
                        name="username"
                        value={user.username}
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
                        value={user.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Bio:
                    {/* Tekstialue, joka päivittää bio-tilan */}
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {/* Rekisteröinti-painike */}
                <button type="submit">Rekisteröidy</button>
            </form>
        </div>
    );
}
export default Register;
