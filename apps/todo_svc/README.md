# @simple-app/todo_svc

## Overview

This tutorial demonstrates how to build api using loopback framework. It also demonstrate how services communicate together

## Usage

Start the application by running `npm start` and go to
http://localhost:3000/explorer. You’ll see the 3 new endpoints under
`UserController` together with the other endpoints under `TodoController`.

![API Explorer screeshot](https://loopback.io/pages/en/lb4/imgs/auth-tutorial-apiexplorer.png)

1. Sign up using the/signup API

   Since we don’t have any users created, click on `POST /signup`. For the
   requestBody, the minimum you need is `email` and `password`. i.e.

   ```json
   {
     "email": "testuser2@abc.com",
     "password": "testuser2"
   }
   ```

2. Log in using thePOST /users/login API

   After calling /users/login , the response body will look something like:

   ```json
   {
     "token": "aaaaaaaaa.aaaaaaaaaaaaaaaaa"
   }
   ```

   Copy the token. Go to the top of the API Explorer, click the “Authorize”
   button.

   ![API Explorer with Authorize Button](https://loopback.io/pages/en/lb4/imgs/auth-tutorial-auth-button.png)

   Paste the token that you previously copied to the “Value” field and then
   click Authorize.

   ![authorize dialog](https://loopback.io/pages/en/lb4/imgs/auth-tutorial-jwt-token.png)

   In the future API calls, this token will be added to the `Authorization`
   header .

3. Get all todos using `GET /todos` API You should be able to call this API
   successfully.

## Tests

Run `npm test` from the root folder.
