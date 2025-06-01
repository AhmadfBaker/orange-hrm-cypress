const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      allureWriter(on, config);
      return config;

      // implement node event listeners here
    },
    env: {
      allure: true,
      allureResultsPath: "allure-results",
      download_dir: './cypress/downloads',
      snapshotOnly: true,
       //tags: "test"
    },
    reporter: 'mochawesome',
    reporterOptions: {
      mochaFile: 'cypress-results/cypress-report.xml',
      reportDir: 'cypress/results/mochawesome',
      overwrite: false,
      html: false,
      json: true,
      toConsole: true,
    },

    "retries": {
      "runMode": 1,
      "openMode": 0
    },
    videosFolder: 'allure-results/',
    screenshotOnRunFailure: true,
    baseUrl: 'https://api.realworld.io',
    // baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php'
    //url: 'https://api.realworld.io',
    projectId: "33d926",

  },
  
});
