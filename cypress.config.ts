import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    chromeWebSecurity: false,
  },
});
