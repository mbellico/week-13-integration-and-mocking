# "Become a QA Automation - week-13"

## What is the Project about?
* Creating integrations tests;
* Mocked tests for the same funtions tested with the integrations tests.

## Author: 
Melisa D. Bellico 

## Technology stack 
* [Node.js](https://nodejs.org/es/docs/) 
* [Jest](https://jestjs.io/docs/getting-started) for unit and integrations testing 
* [Babel](https://babeljs.io/docs/en/) as compiler to support ECMASCRIPT6
* [Visual Studio Code](https://code.visualstudio.com/) or any other code editor is required.-

## How to install?  (you should use the following commands, either on the git or on the VS console)
* $ npm install
* $ npm init to create a package.Json
* $ npm install --save-dev jest
* $ npm install --save-dev babel-jest

    *The package.Json should contain the following script:*

      "scripts": {
            "test": "jest --color",
            "test-coverage": "jest --coverage --color"
            },

## Running the tests:

* npm run test
* npm run test-coverage

## About the tests performed: comments.-

As regards test-coverage, it's not possible to achieve 100% of it without mocking the function, since line 65 from 'complexOperations.js' file, cannot be reached. That line is expected to return '${figure} is not supported', when reached. However, it's not possible to get up to that piece of the function.
