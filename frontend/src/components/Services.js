// src/components/Sevices.js
import React, { useState } from 'react';
import axios from 'axios';

//Services- komponentti mahdollistaa käyttäjän omien tietojen muokkauksen sekä palveluiden käytön.
function Services() {

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
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
    alert('Käyttäjä rekisteröityi onnistuneesti');
    }

    else {
        alert('Olet jättänyt kentän tyhjäksi');
    }
    };

    <div id="theMessage">
        
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
   </form></div>

    var element = document.getElementById("theMessage");

    function showMsg(){
        element.style.visibility = "visible";
    }

    function hideMsg() {
        element.style.visibility = "hidden";
    }


    return (
        <div>
            <h1>Palvelusivu</h1>
            Tervetuloa palvelusivulle! Tämä on sivu, joka on käytettävissä vain kirjautuneille käyttäjille.
            <h2>Käyttäjän tiedot</h2>
            Täällä voit tarkastella ja muokata tietojasi.
            <br></br>
            <br></br>
            <button onClick={showMsg}>Hallitse profiilia</button >
            <h2>Toiminnot</h2>
            Tarjoamme erilaisia toimintoja kirjautuneille käyttäjille.
            <br></br>
            <br></br>
            <button onClick={()=>{ alert('Profiilinhallinta tulossa!'); }}>Suorita toiminto</button>
        </div>
    )
};

export default Services;