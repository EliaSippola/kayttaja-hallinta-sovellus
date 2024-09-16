// src/components/UserManagement.js
import React, { useState, useEffect } from 'react';


// UserManagement-komponentti hoitaa käyttäjien hallinnan ja CRUD-toiminnot
function UserManagement() {
    // useState hook luo tilan käyttäjille ja uudelle käyttäjälle
    const [newUser, setNewUser] = useState({ name: '', bio: '' , password: ''});
    const [editingUser, setEditingUser] = useState(null);

// // useEffect hook suorittaa koodin, kun komponentti ladataan
//     useEffect(() => {
//     //     // Alustava käyttäjädata (voisi olla API-kutsu lopullisessa sovelluksessa)
//         setUsers([
//             // { username: 'Jouni React', bio: 'Tämä on Jounin henkilökohtainen kuvaus (bio).'}, 
//             // { username: 'Jaana React', bio: 'Tämä on Jaanan henkilökohtainen kuvaus (bio).' }
//         ]);
//     }, []);

//API-kutsu lista käyttäjistä
const [users, setUsers] = useState([]);

    useEffect(() => {
        kayttajat()
    }, [])
    
    const kayttajat = async () => {
    const response = await fetch(`http://localhost:3000/api/users`);

    setUsers(await response.json())
    }


    // handleChange-funktio päivittää tilan, kun käyttäjä muuttaa lomakkeen kenttää
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    };

    // handleEdit-funktio asettaa käyttäjän muokkaustilaan
    const handleEdit = (user) => {
        setEditingUser(user);
        setNewUser({ name: user.name, bio: user.bio , _id: user._id});
    };
    
    // handleSubmit-funktio käsittelee lomakkeen lähetyksen
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {

            // send request
            fetch(`http://localhost:3000/api/users/${editingUser._id}`, {
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
            setUsers(users.map(user => (user._id === editingUser._id ? newUser : user)));
            setEditingUser(null);

        } else {

            if (newUser.name && newUser.password && newUser.bio) {
                e.preventDefault()
            
                    // create api request to check if username exists
                    fetch('http://localhost:3000/api/users/exists', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "username": newUser.name
                        })
                    // then check if response is 200, and get response body
                    }).then((res) => {
                        if (!res.ok) {
                            alert('Issue with server connection');
                            return;
                        }
                        // check if name exists, if not, create account
                        res.json().then((res) => {
                            if (res.exists) {
                                alert('Nimi on jo käytössä');
                            } else {
                                fetch(`http://localhost:3000/api/users`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        name: newUser.name,
                                        password: newUser.password,
                                        bio: newUser.bio
                                    })})
                                    .then((response) => console.log(response.data))
                                    .catch((err) => console.log(err));

                                alert('Käyttäjä rekisteröityi onnistuneesti');
                                // Muussa tapauksessa lisätään uusi käyttäjä
                                setUsers([...users, newUser]);
                            }
                        })
                    });

                } else {
                    alert('Olet jättänyt kentän tyhjäksi');
                }
        }
        // Tyhjennetään lomake
        setNewUser({ name: '', bio: '' , password: ''});
    };

    // handleDelete-funktio poistaa käyttäjän listasta
    const handleDelete = (deletedUser) => {

        // send request
        fetch(`http://localhost:3000/api/users/${deletedUser._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (!res.ok) {
                alert('Yhteys tietokantaan epäonnistui!');
                return
            }
        });

        setUsers(users.filter(user => user._id !== deletedUser._id));

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
                        disabled={!!editingUser}
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
                        disabled={!!editingUser}
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
                <button type="submit">{editingUser ? 'Update User' : 'Lisää Käyttäjä'}</button>
            </form>
            <h2>Käyttäjäluettelo</h2>
            {/* Käyttäjälistan renderöinti */}
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name}: {user.bio}
                        <br></br>
                        {/* Edit-painike, joka mahdollistaa käyttäjän muokkaamisen */}
                        <button onClick={() => handleEdit(user)}>Muokkaa</button>
                        {/* Delete-painike, joka poistaa käyttäjän */}
                        <button onClick={() => handleDelete(user)}>Poista</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserManagement;
