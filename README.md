# Colist
Collaborative list built with Angular / Onsen.

## Installation

`$ npm install`

`$ mv conf/firebase.sample.js conf/firebase.js`

Edit Firebase following your Firebase setup.

## Firebase Setup

**Rules**

`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`

**Data**

`{
  "notes" : {}
}`

## Build mobile application

You can build this application for mobile devices with Cordova.

`$ npm i -g cordova`

- Create a new Cordova project.

`$ cordova create <path>`

- Copy your entire project into */www* folder.

- Add your platforms (listed with `cordova platform`).

`$ cordova platform add <platform>`

- Build or run app.

`$ cordova run/build <platform>`

## Contributors

- Hugo Torzuoli
