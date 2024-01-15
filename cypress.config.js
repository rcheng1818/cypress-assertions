const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "video": true,
    "videoCompression": 32,
    "screenshotsFolder": "cypress/screenshots",
    "videosFolder": "cypress/videos",
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report/mochawesome-report"
     }
  },
});
