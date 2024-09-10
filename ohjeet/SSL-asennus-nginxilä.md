install nginx

create certs

modify /etc/nginx/nginx.conf
modify /etc/nginx/conf.d/<server>.conf
modify /etc/nginx/sites-available/default

# HTTPS protokollan käyttö NGINX palvelimella

Ohje kertoo miten luodaan oma SSL sertifikaatti, ja miten saadaan NodeJS palvelimeen yhteys Nginx reverse proxylla HTTPS:n kautta.

Linux serveri pyörii Ubuntulla, joten eroja komennoissa saattaa olla.

## Sertifikaattien luonti

Tässä kohdassa luodaan itse varmistettu sertifikaatti. **Älä käytä itsevarmistettuja sertifikaatteja muualla kuin testiympäristössä.**

1. Aloita menemällä root-käyttäjälle: `sudo -i`
2. Siirry kansioon `/root/certs/`: `cd /root/certs`
3. Luo uusi sertifikaatti komennolla `openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out MyCertificate.crt -keyout MyKey.key`

Sertifikaatti on voimassa 365 päivää.

Sertifikaatti löytyy kansiosta `/root/etc/MyCertificate.crt`
Avain löytyy kansioista `/root/etc/MyKey.key`

Näitä tietoja tarvitaan myöhemmin kun ne asetetaan Nginx serverille

4. Varmistetaan että sertifikaatin oikeudet ovat oikein: `chmod 400 /root/certs/MyKey.key`

Jos käytät eri nimistä avainta, varmista että sen oikeudet toimivat oikein (vain root käyttäjällä oikeus)

Lähde: https://www.linode.com/docs/guides/create-a-self-signed-tls-certificate-ubuntu-18-04/

## Nginx asennus ja konfigurointi

Tämä ohje on vain ohje siihen, miten se minulla toimii. Ohjeessa saattaa olla ylimääräisiä kohtia, ja jotkin kohdat saattavat toimia eri tavalla eri ympäristöissä.

1. Asennetaan nginx komennolla `sudo apt install nginx -y`
2. Konfiguroidaan `/etc/nginx/nginx.conf`: `sudo nano /etc/nginx/nginx.conf`

Lisätään tiedostoon seuraavat tiedot:
```conf
...

# lisätään tiedot tämän kohdan alle
http {

    # lisätään linkki sertifikaattiin
    ssl_certifikate /root/certs/MyCertificate.crt;
    # ja avaimeen
    ssl_certificate_key /root/certs/MyKey.key;

    # varmista myös että kohta 'ssl_protocols':issa on ainakin kohdat TLSv1.1 ja TLS1.2
    # tämä tulisi olla jo tiedostossa automaattisesti

}

...

```

3. Konfiguroidaan `/etc/nginx/conf.d/site.conf`.
    1. suorita komento `sudo nano /etc/nginx/conf.d/<server address>.conf`
jos esimerkiksi sivuston osoite on `example.com`, luodaan tiedosto `example.com.conf`

    2. Asetetaan tiedostoon seuraavat tiedot:

```conf
server {
        # lisää myös nämä rivit jos haluat HTTP yhteydet:
        listen 80 default_server;
        listen [::]:80 default_server;

        # nämä rivit tulee asettaa jotta https toimii
        listen 443 ssl default_server;
        listen [::]:443 ssl default_server;
        server_name <sivuston osoite>; # aseta sivuston osoite tähän

        location / {
                proxy_pass http://localhost:3000; # laita portiksi NodeJS portti
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

}
```

4. Käynnistä nginx uudelleen komennolla `sudo service nginx restart`

Varmista että mitään virheitä ei tule.

lähteitä:
https://www.linode.com/docs/guides/getting-started-with-nginx-part-3-enable-tls-for-https/
https://www.cyberciti.biz/faq/configure-nginx-to-use-only-tls-1-2-and-1-3/
https://medium.com/@sonumishra19091999/deploying-a-node-js-app-on-ubuntu-with-nginx-8b6999c37775
https://www.codewithharry.com/blogpost/deploy-nodejs-app-on-ubuntu/
https://www.linode.com/docs/guides/create-a-self-signed-tls-certificate-ubuntu-18-04/
https://docs.aws.amazon.com/linux/al2023/ug/SSL-on-amazon-linux-2023.html
https://docs.aws.amazon.com/linux/al2023/ug/ec2-lamp-amazon-linux-2023.html

letsencrypt
https://letsencrypt.org/getting-started/
