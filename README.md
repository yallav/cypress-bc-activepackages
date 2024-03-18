# BlueCrest Active Packages Test

This folder consists of the Cypress Automation Test Script. Cucumber BDD framework is embedded to test the identified test scenario. Page Object Model (POM) and Singleton design patterns were used to fulfill the user navigation.

## Test Case

- Launch BlueCrest application with [URL](https://www.bluecrestwellness.com/packages)

- Click 'Active' Health MOTS
- Search for Venue
- Open the displayed venue and select date and time
- Click 'Continue' button to proceed further
- Click 'Continue' button on Order Summary page

## Dependencies

This project consists of the following dependencies

- XPath => Exteranl XPath API module got installed to locate elements on the web pages
- Cucumber => Cuucmber preprocessor was considered to implement BDD framework to fulfill the test case
- Test Reports => Mocha test repors API was added as dependency to generate HTML report, which can be shared across via email automatically after every test in CI/CD

## Setup

The following steps depict the process to execute test

- Clone the code from Git Repo by executing the below command
  - git clone https://github.com/yallav/cypress-bc-activepackages.git
- Setup Node (e.g. on Ubuntu - sudo apt install nodejs)
- Verify the node version by running the following command
  - node -v
- Install NPM (e.g. on Ubuntu - sudo apt install npm)
- Verify the npm version by running the following command
  - npm -v
- Install dependencies
  - npm install

Alternatively following the steps will also work by installing individual dependencies

- Follow the Cypress setup by following the [setup link](https://docs.cypress.io/guides/getting-started/installing-cypress)
- Install the Cypress-Xpath dependency from [NPM](https://www.npmjs.com/package/cypress-xpath)
- Install the Cucumber pre-processor by following instructions from [NPM](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- Follow the instructions to enhance test with [Mocha Test Reports](https://www.npmjs.com/package/cypress-mochawesome-reporter)

## Run

Execute the command from the project root folder - `npx cypress run`
NOTE - This command will execute the script in headless mode
