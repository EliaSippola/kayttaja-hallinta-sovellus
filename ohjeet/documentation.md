# Style

```
## Feature

How it works

Extra infomation

```

# Documentation

## API

Guide on using the api in the backend.

BaseUrl is `/api/users`.

The api supports GET, POST, PUT and DELETE requests (CRUD).

The id will be specified with `../:id` end.
put the id to the end like this `../api/users/1` when id is 1.

```JavaScript
// api calls

// all users
GET 'http://localhost:3000/api/users'

// one user
GET 'http://localhost:3000/api/users/:id'

// create user
POST 'http://localhost:3000/api/users'
body = {
    'name': name,
    'password': pass,
    'bio': bio // bio is optional
}

// Update user
PUT 'http://localhost:3000/api/users/:id'
body = {
    'name': name, // optional
    'bio': bio // optional, if not set, will be set to null
}

// Delete user
DELETE 'http://localhost:3000/api/user/:id'
```