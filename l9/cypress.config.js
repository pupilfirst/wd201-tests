const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-json-results")({
        on,
        filename: "results.json",
      });
    },
    pageLoadTimeout: 5000
  },
});
