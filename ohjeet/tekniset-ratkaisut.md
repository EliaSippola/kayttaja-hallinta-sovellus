# yhteenveto

Ohjelma jaetaan frontendiin ja backendiin.

Sovelluksen Frontend- osa huolehtii sivustosta, ja backend taas hoitaa APIn ja Sivuston sivujen käyttämisen.

### Frontend

Frontend koostuu React- sovelluksesta, jossa on:
- Pääsivu, jossa linkit muille sivuille
- Rekisteröintisivu
- Kirjautumissivu
- Käyttäjähallintasivu

Frontendissa on myös toiminnot:
- käyttäjän lisäämiseen APIn kautta (Register.js)
- käyttäjän tietojen tarkistaminen APIn kautta (Login.js)
- käyttäjän muokkaaminen / poistaminen APIn kautta (UserMgm.js)

### Backend

Backend huolehtii että sivut näkyvät oikein:
- `/` -> Pääsivu
- `/register` -> Rekisteröinti
- `/login` -> Kirjautuminen
- `/userMgm` -> Käyttäjähallinta

*Sivujen osoitteet saattavat vaihtua*

Backendissä on myös API, joka hoitaa yhteydet MongoDB -tietokantaan:
- `GET` - Kaikkien käyttäjien / yhden käyttäjän tietojen hakeminen
- `POST` - Käyttäjän lisääminen
- `PUT` - Käyttäjän tietojen muokkaaminen
- `DELETE` - Käyttäjän poistaminen