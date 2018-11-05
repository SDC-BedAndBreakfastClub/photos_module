# Photo-Module

> Service responsible for rendering a component clone of Airbnb's Photo Module and Modal Gallery.

## Related Projects

  - https://github.com/BedandBreakfastClub/airbnb-clone-reviews-module
  - https://github.com/BedandBreakfastClub/airbnb-clone-booking-module
  - https://github.com/BedandBreakfastClub/airbnb-clone-similar-listings-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Follow the instructions for installation and configuring in development and then run the following commands

```sh
npm run build
npm start
```
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- [Node 8.12.0](https://nodejs.org/en/)
- [MySQL 5.7](https://www.mysql.com/)

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Configuration

From within the root directory:

```sh
cp config/config.example.js config/config.js
```
Edit the `config.js` file and replace the `MYSQL_USER` and `MYSQL_PASS` fields with your username and password.

### Seeding the database

From within the root directory:

```sh
npm run db:seed
```

### Running the server

From within the root directory:

```sh
npm run watch & npm start
```
