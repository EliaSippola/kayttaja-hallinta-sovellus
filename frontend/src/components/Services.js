import { useState } from "react";
// src/components/Sevices.js

//Services- komponentti mahdollistaa käyttäjän omien tietojen muokkauksen sekä palveluiden käytön.
function Services() {
    const [catFact, setCatFact] = useState("");

    const handleClick = async () => {
        await fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
            setCatFact(data.fact);
        });
    } 
    
    return (
        <div>
            <h1>Palvelusivu</h1>
            Tervetuloa palvelusivulle! Tämä on sivu, joka on käytettävissä vain kirjautuneille käyttäjille.
            <h2>Käyttäjän tiedot</h2>
            Täällä voit tarkastella ja muokata tietojasi.
            <br></br>
            <br></br>
            <button onClick={()=>{ alert('Profiilinhallinta tulossa!'); }}>Hallitse profiilia</button >
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