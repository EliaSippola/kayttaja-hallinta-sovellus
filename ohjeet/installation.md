# installing:

## Backend

1. open cmd / powershell at backend folder
2. run `npm install`
3. create `.env`
```properties
PORT = 3000
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
```properties
BUILD_PATH= '../backend/build'
```
2. Run as normal

**The folder at destination will be overwritten**