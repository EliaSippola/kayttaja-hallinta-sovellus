# installing:

## Backend

Make sure you have MongoDB database ready to connect to the backend.

Use MongoDB URL to connect to it. The syntax is:
`mongodb+srv://<username>:<password>@<host>/<database>?<options>`

1. open cmd / powershell at backend folder
2. run `npm install`
3. create `.env`
```ini
# port to open backend on
PORT = 3000

# url to connect to MongoDB
# syntax: mongodb+srv://<username>:<password>@<host>/<database>?<options>
MONGODB_URI = '<mongodb_url>'
```
4. run `node app.js`

Backend will now be working in browser

## Frontend

### Running

1. open cmd / powershell at frontend folder
2. run `npm install`
3. run `npm run start`

Frontend will be open at `localhost:3000`

### Creating build for backend

1. open cmd / powershell at frontend folder
2. run `npm run build`
3. move `/build` folder to backend

Run backend server to see results

If you want to create `/build` straight at backend do:
1. create `.env` file at frontend
```ini
# path to backend/build folder
BUILD_PATH= '../backend/build'
```
2. Run as normal

**The folder at destination will be overwritten**


### Installing to AWS

