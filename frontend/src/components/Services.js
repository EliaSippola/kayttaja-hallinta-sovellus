// src/components/Sevices.js

//Services- komponentti mahdollistaa käyttäjän omien tietojen muokkauksen sekä palveluiden käytön.
function Services() { 
    return (
        <div>
            <h1>Palvelusivu</h1>
            Tervetuloa palvelusivulle! Tämä on sivu, joka on käytettävissä vain kirjautuneille käyttäjille.
            <h2>Käyttäjän tiedot</h2>
            Täällä voit tarkastella ja muokata tietojasi.
            <br></br>
            <br></br>
            <button onclick={()=>{ alert('Profiilinhallinta tulossa!'); }}>Hallitse profiilia</button >
            <h2>Toiminnot</h2>
            Tarjoamme erilaisia toimintoja kirjautuneille käyttäjille.
            <br></br>
            <br></br>
            <button onclick={()=>{ alert('Profiilinhallinta tulossa!'); }}>Suorita toiminto</button>
        </div>
    )
};

export default Services;