# NodeJS API Starter

Stop being dumb and start being smart.

## Tools and Practices Used

* ![NodeJS](https://nodejs.org/en/) w/![Express Framework](https://github.com/expressjs/express)
* ![MongoDB](https://docs.mongodb.com/manual/) w/![Mongoose ORM](https://github.com/Automattic/mongoose)
* ![OAuth 2.0](https://tools.ietf.org/html/rfc6749)
* ![REST Interface](https://en.wikipedia.org/wiki/Representational_state_transfer) w/![JSON API](https://jsonapi.org/)(-ish) responses
* ![Web Sockets](https://socket.io/) for resource events
* ![Cucumber](https://github.com/cucumber/cucumber-js) acceptance testing
* ![Component-based Structure](https://github.com/i0natan/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)
* ![Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* ![mjs file extensions](http://2ality.com/2017/09/native-esm-node.html)
* ![Winson](https://github.com/winstonjs/winston) event logging

## Setup

##### Prerequisites

Make sure that **Node**, **Mongo**, and **Redis** are installed on your machine. If not, install these with ![Homebrew](https://brew.sh/).

```bash
brew install node
brew install mongodb
brew services start mongodb
brew install redis
brew services start redis
redis-cli ping
```

##### Environment Config File

Create a file called `.env` in the root directory. This is just for local development – in production you'll set these as environment variables on your server.

```bash
SECRET=secret-string-for-tokens-and-encryption
EXAMPLE_CLIENT_ID=123456ab-cdef-ghij-klmn-opqrstuvwxyz
EXAMPLE_CLIENT_SECRET=123456ab-cdef-ghij-klmn-opqrstuvwxyz
BASE_URL=
MONGODB_URI=
REDIS_URL=
```

##### Run

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production
npm start
```

## Rules of Thumb

##### Writing Code

* Write clean, but not clever code
* Write comments for a level II dev
* Avoid [premature optimization](http://wiki.c2.com/?PrematureOptimization)

##### Error Codes

Keep the status codes simple - try to stick to these.

* `200` – OK
* `201` – Created
* `204` – No Content
* `304` – Not Modified
* `400` – Bad Request
* `401` – Unauthorized
* `403` – Forbidden
* `404` – Not Found
* `410` – Gone
* `500` – Internal Server Error