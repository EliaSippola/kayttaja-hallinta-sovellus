// src/components/Sevices.js
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

//Services- komponentti mahdollistaa käyttäjän omien tietojen muokkauksen sekä palveluiden käytön.
function Services({getUser, setUser}) {
    const [catFact, setCatFact] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        await fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
            setCatFact(data.fact);
        });
    } 
    
    //Muuttuja määrittää profiilinhallinta lomakkeen tilan näkyväksi tai pois näkyvistä
    const [visible, setvisible]=useState(false)

    useEffect(() => {
        if (getUser()['name'] == '') {
            navigate('/kirjautuminen');
        }
    }, []);

    return (
        <div>
            <h1>Palvelusivu</h1>
            Tervetuloa palvelusivulle! Tämä on sivu, joka on käytettävissä vain kirjautuneille käyttäjille.
            <h2>Käyttäjän tiedot</h2>
            Täällä voit tarkastella ja muokata tietojasi.
            <br></br>
            <br></br>
            {/* Profiilin hallinta pop up lomake */}
            <button onClick={()=>setvisible(true)}>Hallitse profiilia</button>
            <Model isOpen={visible} onRequestClose={()=>setvisible(false)} style={{
                content: {
                    top: '50%',
                    left: '25%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                  },
            }}>
                <Profile getUser={getUser} setUser={setUser} />
                <button onClick={()=>setvisible(false)}>X</button>
            </Model>
            <h2>Toiminnot</h2>
            Tarjoamme erilaisia toimintoja kirjautuneille käyttäjille.
            <br></br>
            <br></br>
            <button onClick={handleClick}>Suorita toiminto</button>
            <p>{catFact}</p>
        </div>
    )
};

export default Services;