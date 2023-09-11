// @ts-check
const { devices } = require('@playwright/test');

const config = {
  workers: 1,
  outputDir: './test-results',
  timeout: 300000,
  use: {
      video:'on-first-retry',
      screenshot: 'only-on-failure',
      headless: false,
      bypassCSP: false,
      acceptDownloads: true,
      actiontimeout: 60000,
      expect: {
          timeout: 10000
      },
      launchOptions: {
          slowMo: 250,
          downloadsPath: 'resources/downloads',
          args: ['--start-maximized']
      },
      viewport: null,

      /*Igonore insecure connections */
      ignoreHTTPSErrors: true,
      // bypassCSP: true,
  },
  retries: 0,

  reporter: 'html',

  projects :[
      {
          name: 'Chrome',
          use: {
              channel: 'chrome',
              baseURL : 'https://demoqa.com/'
          },
      },
       /* Test against mobile viewports. */
      {
        name: 'Mobile Chrome',
        use: {
            ...devices['iPhone 13'],
            baseURL : 'https://demoqa.com/'
        },
      },
    //   {
    //       name: 'Edge',
    //       use: {
    //           baseURL : 'https://demoqa.com/',
    //           channel: 'msedge'
    //       },
    //   }
  ]

}
module.exports = config;

