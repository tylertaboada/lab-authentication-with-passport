![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Authentication With PassportJS

## Introduction

In previous lessons, we have learned how important it is to have your user managed (saved and retrieved) successfully. In this lab, you will do it one more time, just to make sure we are ready to move forward into new knowledge conquests :wink:

Overall, the goal is to understand how authentication and authorization work in a web applications, why these features are useful and to be able to implement Sign Up and Sign In features using Passport.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Completed Lab"
git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Introductions

The boilerplate code provides the basic layout and organization for this assignment.

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to add a `.env` file at the root of the project:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/[YOUR_DATA_BASE_NAME]
```

And you have to install all of the dependencies specified in `package.json`:

```sh
$ npm install
```

Now you are ready to start 🚀

## Iteration #0: Configure Passport

To start, you will need to install `passport`, `passport-local` and `bcryptjs` from your command line, configure your passport strategies, configure the serialization and deserialization process, and mount the passport middleware on your app.

On the `app.js` file, you should mount the `passport.initialize()` and the `passport.session()` middleware, and place it after the `express-session` middleware.

In `configure-passport.js`, for now, you should define a serialization and deserialization process.

## Iteration #1: The Sign Up Feature

The repo you cloned comes with a `User` model and a `router` file already made for you, in `/routes/index.js`. It also has all the views you need, although some are empty :smile:

Add a new route handler to your `/routes/authentication.js` file with the endpoint `/sign-up` and make it render the template in the `/views/authentication/sign-up.hbs` file.

Now, in that _.hbs_ file, add a form that makes a **POST** request to `/authentication/sign-up`, with a field for `username` and `password`.

Finally, add a **POST** route handler to your `/router/authentication.js` to receive the data from the Sign Up form and create a new user with the data.

To make everything work, you need to create a `sign-up` authentication strategy on the `configure-passport.js` file. Remember, you configure a strategy in passport by having the following:

```js
const passport = require('passport');
const passportLocal = require('passport-local');

const PassportLocalStrategy = passportLocal.Strategy;

passport.use(
  'sign-up',
  new PassportLocalStrategy({}, (username, password, callback) => {
    // Perform your authentication logic and call the callback function,
    // passing it null in the first parameter and the user document in the second
  })
);
```

Afterwards, you need to pass a call to `passport.authenticate('sign-up', { /* ...options */})` to the route handler for the `sign-up` route.

## Iteration #2: The Login Feature

In order to allow registered users to login to our platform, we need to add a Sign In feature, by including a **GET** route handler on our `/routes/authentication.js` router to display the Sign In page. `/views/authentication/sign-in.hbs` is empty, so let's fill it with a Sign In form.

Once we have the form, let's add another route handler to the router to receive that data and log the user in. The form should make a **POST** request to `/authentication/sign-in`.

This feature required you to follow the same process you have followed in the previous iteration, but you should now use an authentication strategy name of `sign-in` and perform the corresponding authentication logic.

## Private Page

In the repo you forked, there is a file called `/authentication/private.hbs`. This view is rendered when the endpoint `/private` is visited. You should use a `route-guard` middleware to make sure that the user is logged in before viewing this page.

If everything worked correctly, the user should be able to Sign Up, Sign In, and then visit the private page, where they will receive a personalized greeting.

Happy coding! 💙
