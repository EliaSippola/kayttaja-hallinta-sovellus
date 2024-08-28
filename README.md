# Käyttäjähallintasovellus

Käyttäjähallintasovellus on Reactiin ja NodeJS:ään/ExpressJS:ään pohjautuva käyttäjien hallintasivusto. Sivuston backendissa on api joka yhdistää MongoDB tietokantaan, ja jossa on CRUD toiminnot.

Sivustolla on seuraavat toiminnot:


## Asennus

Voi asentaa sivuston omalle koneelle jos sinulla on NodeJS asennettuna, ja sinulla on MongoDB tietokanta johon backend voi yhdistää.

1. Kopioi GitHub omalle koneellesi komennolla `git clone <url>`
2. Luo build versio frontendistä:
    1. Avaa frontendin kansio komentokehoittessa.
    2. Asenna tarvittavat paketit komennolla `npm install`
    3. Luo `/build` kansio komennolla `npm run build`
3. Siirrä kansio backendiin heti `/backend` kansion alle.
4. Luo backendin ympäristömuuttujat
    1. Luo tiedosto `.env` kansion backend alle
    2. Aseta tiedostoon seuraavat tiedot:
```ini
# Backendin portti
PORT = 3000

# MongoDB yhdistämis url
MONGODB_URI = <MongoDB url>
```
5. käynnistä backend komennolla `node ./app.js`