# Description

Pauperial - Simple tool for making short links or QR-code for your looong links.

## Installation

### Requirements

- Yarn installed
- Node.js >= v16
- PostgreSQL database

### Installing

- Clone this repository: `git clone https://github.com/LWJerri/Pauperial.git`
- Install Node.js requirements `yarn`
- Build production code `yarn build`

For backend:

- Rename `ormconfig.example.json` to `ormconfig.json` and configurate it
- Run production code `yarn start:backend`

For frontend:

- In `Main.svelte` & `Redirect.svelte` files set `API_URL`
- Run production code `yarn start:frontend`

## Production

You also can use or test this code, just visit the [Pauperial website](https://pauperial.herokuapp.com/)

## Screenshots

![First screenshot](https://i.imgur.com/E8xmIh8.png)
![Second screenshot](https://i.imgur.com/Xr1Bwwy.png)

## Contributing

This project opened for contribution and any suggestions! You can create a new `Issue` or make an `Pull request` with your code changes.

## LICENSE

This code has **MIT** license. See the `LICENSE` file for getting more information.
