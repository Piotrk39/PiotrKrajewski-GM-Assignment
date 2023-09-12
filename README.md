<p align="center">
  <a href="https://playwright.dev/">
    <img width="140" alt="Playwright Logo" src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" />
  </a>
</p>



<p align="center">
  This is playwright automation test suite designed for the assesment process
</p>

> 🚩 **Note**

### Installation

Clone the repository and run the command:

```shell
npm install
```

> 🚩 **Note**
>
> The only prerequisite is to have Node.js, Plawyright and Playwright Add On for VS Code installed on your machine

### Run test via console

```shell
npx playwright test --project Chrome
```
### Or to run both mobile and desktop test

```shell
npx playwright test
```

### Or run them using built in runner via VS Code

> 🚩 **Note**
> You can also select which profile you want to use in the Test tab.
> Slow motion test execution is disabled by default. If you wish to run them slower please comment out the line in Playwright.config file

### Project is written in TypeScript and uses Playwright API to run the tests. Structure of the project consists of Page Object model that is divided into locators and methods that are called in the test itself.
### In addtition to UI tests API testing was added that can be run together or separate from UI tests.

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).


