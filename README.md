# Summary

This repository is the Backend REST API for the lang chain functionality.
The main functionality is implemented in the generateResponse function. The main stages of logic:
1. Defining keywords and responses
2. Lowercase text
3. Search for keywords in the text
4. Return an answer or message on uncertainty

Where it can be used? For example:
1. Chat bot
2. Messengers
3. Integration where we need a response by keyword

# Setting up

In order to set up the project locally, some actions need to be done. The following subsections contain pre-requirements and local setup steps.

## Pre-requirements

1. Make sure that your Node version is >= `18.0.0`.
   You can check your Node version in your terminal by running `node -v`. To change your Node version you can use `nvm` [Node Version Manager](https://github.com/nvm-sh/nvm).
## Docker compose local setup

1. Make sure that you have up-to-date docker engine ([Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Rancher Desktop](https://rancherdesktop.io/))
2. Clone the repository to your local machine
3. Create a copy of the `.env.example` file and rename it to `.env`
4. Fill all the empty `.env` fields with your valid credentials
5. Run `docker compose up` and wait until you see `"Nest application successfully started"`
6. Check that everything is working just fine. Go to http://localhost:{$APPLICATION_PORT}/api/swagger and check that API is responding on calls

## Step-by-step local setup

1. Clone the repository to your local machine
2. Switch to `main` branch `git checkout main`
3. Install the dependencies using `npm ci`
4. Create a copy of the `.env.example` file and rename it to `.env`
5. Start the application `npm run start:dev`
6. Visit swagger documentation `http://localhost:{port}/api/documentation`