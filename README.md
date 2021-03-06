# Fake Umbrella Web

Project created for the fake umbrella challenge. Application developed using Angular as the front end framework.

## Requirements

This app relies on a backend service (API) to display data. Please follow the instructions from this [repository](https://github.com/Gabriel-A-Rocha/fake-umbrella-api) to run the API.

## Installation

```code
npm install
```

## Running the app

```code
npm start
```

The app will be available at http://localhost:4200.

## Running with Docker

In order to run the app via container, go through the following commands.

Create the Docker image:

```code
docker build -t fake-umbrella-web .
```

Run the container:

```code
docker run -d -p 4200:80 fake-umbrella-web
```

## Screenshots

Customers:

![Customers](https://user-images.githubusercontent.com/60102062/155256411-e98063b4-88ea-452e-b767-d83caff0e06a.png)

Reports:

![Report 2](https://user-images.githubusercontent.com/60102062/155429245-c8dbb1af-58f2-48ef-9439-e0f1fccc0ae1.png)

![Report](https://user-images.githubusercontent.com/60102062/155256469-76ed4dc6-e485-489c-8533-7dc45f55126f.png)

## Stay in touch

- Author - Gabriel A. Rocha
- LinkedIn - [LinkedIn Profile](https://www.linkedin.com/in/gabrielaltairrocha/)
