![](screenshots/header.png)

# DevHack 2020 🧑🏻‍🚀🚀

**DevHack** is an online Hackathon organised by **Developer Student Clubs - Kalinga Institute of Industrial Technology** for all those
problem solvers and creators out there who are ready to take up a challenge and showcase their skills by as innovative as possible. 

This repository contains all the code and database scripts for the website.

<div align="center">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg">
</div>


## Code Style

We have used the standard [Prettier](https://prettier.io/) config that comes already loaded with GatsbyJS. You can view it [here](.prettierrc)


## Technologies and Frameworks 

Built using [GatsbyJS](https://www.gatsbyjs.org/) to leverage server side rendering. Used [Firebase](https://firebase.google.com/) for authentication, database and hosting.

The repository has CI/CD activated. Every commit pushed to `master` is built and deployed. You can have a look 
at the `.github/workflows/build.yml` file for the CI specification.


## Development

Follow the following instructions to set up your dev environment, it's pretty straightforward. You can find a list of all the dependencies in [package.json](package.json)

* `npm install` to install all the dependencies
* `npm start` to build and view the site on `localhost:8000`
* `npm run build` to build to static assets


A map of the source files. All the code is in the `src/` folder

```
src
├── assets
│   ├── productsans.ttf
│   └── Rules-DevHack.pdf
├── components
│   ├── dashboard
│   │   ├── dashboard.css
│   │   └── Dashboard.js
│   ├── firebase.js
│   ├── home
│   │   ├── domain
│   │   │   ├── domain.css
│   │   │   └── Domain.js
│   │   ├── footer
│   │   │   ├── footer.css
│   │   │   └── Footer.js
│   │   ├── info
│   │   │   ├── info.css
│   │   │   └── Info.js
│   │   ├── landing
│   │   │   ├── landing.css
│   │   │   └── Landing.js
│   │   ├── sessions
│   │   │   ├── sessions.css
│   │   │   └── Sessions.js
│   │   └── social
│   │       ├── social.css
│   │       └── Social.js
│   ├── navbar
│   │   ├── navbar.css
│   │   └── Navbar.js
│   └── seo.js
├── images
│   ├── devhack-colour.svg
│   ├── dsckiit-logo.svg
│   ├── favicon.png
│   ├── fb.svg
│   ├── insta.svg
│   ├── kiit-logo.svg
│   ├── mobile-bg.svg
│   ├── numbergrid.svg
│   ├── semicircle.svg
│   ├── triangle.svg
│   ├── twitter.svg
│   └── web-bg.svg
└── pages
    ├── css
    │   ├── index.css
    │   ├── login.css
    │   ├── rules.css
    │   └── schedule.css
    ├── index.js
    ├── leaderboard
    │   ├── education.js
    │   ├── environment.js
    │   ├── healthcare.js
    │   ├── index.js
    │   └── transport.js
    ├── login.js
    ├── register.js
    ├── rules.js
    └── schedule.js

15 directories, 46 files
```


You can open issues and pull requests if you have ways to improve the site. We are always open for that. Please make sure you write up the a proper description for your pull request and open a PR in the `development` branch. 


## Screenshots

<div align="center">
    <img src="screenshots/a.png" width="80%">
</div>

<br>

## LICENSE
Copyright (c) **DSC KIIT**. All rights reserved. Licensed under the MIT License

[![](https://img.shields.io/github/license/junaidrahim/desiresalesportal?style=for-the-badge)](LICENSE)

<br>

<div align="center">
    <img width="50%" src="screenshots/logo.png">
</div>

