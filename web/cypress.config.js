const { defineConfig } = require("cypress");
// Import the Cypress configuration function to define custom configurations.
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// Import the Cypress ESBuild preprocessor for efficient file bundling during tests.
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
// Import the function to add the Cucumber preprocessor plugin to Cypress for BDD support.
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
// Import the Esbuild plugin specifically for the Cucumber preprocessor to support bundling.
module.exports = {
  // Export the configuration object for Cypress.
  e2e: {
    // Define the settings for End-to-End testing.
    baseUrl: "http://localhost:3000",
    // Set the base URL for your tests. All relative paths in tests will use this as the root.
    viewportWidth: 1920,
    // Define the width of the browser viewport for tests.
    viewportHeight: 1080,
    // Define the height of the browser viewport for tests.
    specPattern: "cypress/e2e/**/*.feature",
    // Specify the file pattern to look for `.feature` files (BDD test scenarios) in the e2e folder.
    stepDefinitions: "cypress/support/step_definitions/steps.js", // Define a centralized location for step definitions
    async setupNodeEvents(on, config) {
      // Set up Node.js event listeners for Cypress.
      console.log("Cypress config loaded!");
      // Log a message indicating that the Cypress configuration has been loaded.
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
        // Create a bundler using the Esbuild plugin for the Cucumber preprocessor.
      });
      on("file:preprocessor", bundler);
      // Register the bundler as the preprocessor for Cypress.
      await addCucumberPreprocessorPlugin(on, config);
      // Add the Cucumber preprocessor plugin to Cypress.
      return config;
      // Return the modified configuration object.
    },
    reporter: "junit",
    // Specify the test reporter to use. In this case, JUnit for generating XML reports.
    reporterOptions: {
      // Configure options for the reporter.
      mochaFile: "results/output.xml",
      // Define the output location for the JUnit test results file.
      toConsole: false,
      // Disable output of the test results to the console.
    },
  },
};
