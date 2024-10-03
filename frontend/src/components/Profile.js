// src/components/UserManagement.js
import React, { useState, useEffect } from 'react';


// UserManagement-komponentti hoitaa käyttäjien hallinnan ja CRUD-toiminnot
function Profile({getUser, setUser}) {
    // useState hook luo tilan käyttäjille ja uudelle käyttäjälle
    const [newUser, setNewUser] = useState({ name: '', bio: '' , password: ''});

    //API-kutsu lista käyttäjistä
    const [users, setUsers] = useState([]);

    useEffect(() => {
        kayttajat();
    }, [])
    
    const kayttajat = async () => {
        const response = await fetch(`http://localhost:3000/api/users`);
        const json = await response.json();
        setUsers(json);
    }

    const filterForLoggedUser = async () => {
        if (users.length < 1) {
            return;
        }
        const loggedUser = await getUser();
        const filteredUsers = users.filter((a) => {return a === null ? null : a.name === loggedUser['name'];});

        setNewUser(filteredUsers[0]);
    }

    useEffect(() => {
        filterForLoggedUser();
    }, [users]);

    // handleChange-funktio päivittää tilan, kun käyttäjä muuttaa lomakkeen kenttää
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    };
    
    // handleSubmit-funktio käsittelee lomakkeen lähetyksen
    const handleSubmit = (e) => {
        e.preventDefault();

        // send request
        fetch(`http://localhost:3000/api/users/${newUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newUser.name,
                password: newUser.password,
                bio: newUser.bio
            })
        }).then((res) => {
            if (!res.ok) {
                alert('Yhteys tietokantaan epäonnistui!');
                return
            }
        });

        // Jos ollaan muokkaustilassa, päivitetään olemassa oleva käyttäjä 
        setUsers(users.map(user => (user._id === newUser._id ? newUser : user)));
    };

    // Komponentin renderöinti
    return (
        <div>
            <h1>Käyttäjien hallinta</h1>
            {/* Lomakkeen lähetys kutsuu handleSubmit-funktiota */}
            <form onSubmit={handleSubmit}>
                <label>
                    Käyttäjänimi:
                    {/* Tekstikenttä, joka päivittää username-tilan ja estää muokkaamisen päivitystilan aikana */}
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                        disabled
                    />
                </label>
                <br/>
                <label>
                Salasana:
                    {/* Salasanojen syöttökenttä, joka päivittää password-tilan */}
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
Bio:
                    {/* Tekstialue, joka päivittää bio-tilan */}
                    <textarea
                        name="bio"
                        value={newUser.bio}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {/* Lomakkeen lähetyspainike, joka vaihtaa tekstinsä päivitys- tai lisäystilanteen mukaan */}
                <button type="submit">Päivitä tietoja</button>
            </form>
        </div>
    );
}

export default Profile;
