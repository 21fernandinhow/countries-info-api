# Countries Info API

## Overview

Countries Info API is an Express application that provides information about countries, including available countries, border countries, population data, and flag images. It uses external APIs to fetch the necessary data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [Get Available Countries](#get-available-countries)
  - [Get Country Info](#get-country-info)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a .env file in the root directory and add your environment variables:

    ```plaintext
        DATENAGER_API_URL=<your-datenager-api-url>
        COUNTRIES_NOW_API_URL=<your-countries-now-api-url>
        PORT=8080
    ```

## Usage

- To run the application in development mode, use the following command: `npm run dev`
- To build the project, use: `npm run build`
- To start the application in production mode, use: `npm start`

The server will run on `http://localhost:8080` (or the port specified in the `.env` file).

## Endpoints

### Get Available Countries

- **URL:** `/api/availableCountries`
- **Method:** `GET`
- **Description:** Retrieves a list of available countries.

### Get Country Info

- **URL:** `/api/countryInfo/:countryCode&:countryName`
- **Method:** `GET`
- **Description:** Retrieves detailed information about a specific country, including:
  - **List of Border Countries:** A list of countries that share a border with the selected country.
  - **Population Data:** Historical population data for the country, suitable for plotting on a chart.
  - **Flag URL:** A URL to the country’s flag image.

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `DATENAGER_API_URL`: Base URL for the Datenager API.
- `COUNTRIES_NOW_API_URL`: Base URL for the Countries Now API.
- `PORT`: The port on which the server will run (optional, default is `8080`).