# Fake Umbrella Web

Project created for the fake umbrella challenge. Application developed using Angular as the front end framework.

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

Build the project:

```code
npm build
```

Create the Docker image:

```code
docker build -t fake-umbrella-web .
```

Run the container:

```code
docker run -d -p 4200:80 fake-umbrella-web
```

## Stay in touch

- Author - Gabriel A. Rocha
- LinkedIn - [LinkedIn Profile](https://www.linkedin.com/in/gabrielaltairrocha/)
