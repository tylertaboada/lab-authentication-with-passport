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

## Iteration #1: The Sign Up Feature

The repo you cloned comes with a `User` model and a `router` file already made for you, in `/routes/index.js`. It also has all the views you need, although some are empty :smile:

Add a new route to your `/routes/passport.js` file with the path `/sign-up` and point it to your `/views/passport/sign-up.hbs` file.

Now, in that _.hbs_ file, add a form that makes a **POST** request to `/sign-up`, with a field for `username` and `password`.

Finally, add a **POST** route handler to your `/router/passport.js` to receive the data from the Sign Up form and create a new user with the data.

Make sure you install `bcrypt` (or `bcryptjs`) and `passport` npm packages and require it in `/router/passport.js`.

## Iteration #2: The Login Feature

In order to allow registered users to login to our platform, we need to add a Sign In feature, by including a **GET** route handler on our `/routes/passport.js` router to display the Sign In page. `/views/passport/sign-in.hbs` is empty, so let's fill it with a Sign In form.

Once we have the form, let's add another route handler to the router to receive that data and log the user in. The form should make a **POST** request to `/sign-in`.

**But Wait**

In order to do that, we need to configure Sessions and initialize a session with passport in our `app.js` file. We also need to add the `passport.serializeUser` methods as well as defining the Passport Local Strategy.

## Private Page

In the repo you forked, there is a file called `/passport/private.hbs`. This page is referenced in the `/router/passport.js` with the path `/private`. We use the `ensureLogin.ensureLoggedIn()` middleware to make sure that the user is logged in before viewing this page.

If everything worked correctly, the user should be able to Sign Up, Sign In, and then visit the private page, where they will receive a personalized greeting.

Happy coding! 💙
