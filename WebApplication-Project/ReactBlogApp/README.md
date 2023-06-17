<h2 align="center">React-Blog-App </h2>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

```
Node.js
MongoDB(Atlas)
```

### Installing

- Clone this repository.

Install the dependencies in Backend as well as Blog-app-ui:

```
npm install
```

Create a .env file in the **_Backend_** directory with the following variables:

```
CONNECTION_STRING=<your mongodb atlas url>
CLIENT_ID = <your Google Cloud client_id>
CLIENT_SECRET= <your Google Cloud client_secret>
CLIENT_URL="http://localhost:3000"
```

Create a .env file in the **_blog-app-ui_** directory with the following variables:

```
REACT_APP_API_URL="http://localhost:8080"
```

Start the Backend server:

```
npm start
```

Then Start the frontend server:

```
npm start
```

## 🎈 Usage <a name="usage"></a>

The API will be available at http://localhost:8080
The react-app will be available at http://localhost:3000

### API Endpoints

#### blogs

- `GET /api/blogs`: retrieve all blog post
- `GET /api/blogs/:id`: retrieve a single blog post
- `POST /api/blogs`: create a new blog post
- `PUT /api/blogs/:id`: update a blog post
- `DELETE /api/blogs/:id`: delete a blog post

#### users

- only login using your **_google account_**

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Passport-Js](https://www.passportjs.org/packages/passport-google-oauth/) - Google Authentication
- [Google Cloud](https://console.cloud.google.com)
- [React](https://reactjs.org/)-Frontend Fremwork
- [MUI](https://mui.com/)-UI
