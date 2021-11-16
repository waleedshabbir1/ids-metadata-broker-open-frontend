# Mongo DB handler

The Mongo DB handler is a nodejs backend to provide user related APIs for broker.

## Usage

### Prerequisite

- nodejs - v12.14.1
- npm - 6.14.8

### Setup

Install all dependencies

```bash
npm install
```

Create a **.env** file based on **envexample** file. Four values are need in it:

- MONGODB_ENDPOINT : which is the endpoint of your MongoDB

-  JWT_SECRET : which is a random string for token generation and verification (Shouldn't be exposed to others)
- ADMIN_PASSWORD : an admin user (username:admin) will be created if there is no such user in Mongo DB and this is the password for admin (Shouldn't be exposed to others)
- BROKER_URL : which defines the url of broker-core component

### Run

Run the application

```bash
npm start
```

## Code Structure

### models

MongoDB models. Use mongoose schema.

#### User

**hash password** and **compare password** are defined here using **bcrypt**.

------



### routes

#### auth

`/auth`

-  **POST**  `/` to authenticate user by checking username and password and return token and user

- **GET** `/user` to get the current user using valid token

#### users

`/users`

- **GET** `/` to get all users in the database

- **POST** `/add` to add new user in database (admin only)

- **POST** `/update/:id` to update user in database (admin only)

- **DELETE** `/delete/:id` to delete user in database (admin only)

  ------



### middleware

#### auth

to check the token is valid or not

#### admin

to check the role of the user is admin or not
