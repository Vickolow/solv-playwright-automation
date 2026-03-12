// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Scan all subfolders under "tests" for test files
  testDir: './tests',

  // File patterns Playwright should recognize as tests
  testMatch: '**/*.spec.js',  // scans any .spec.js in subfolders

  // Reporter configuration
  reporter: 'html',

  // Shared settings for all tests
  use: {
    retries: 2,
    trace: 'on-first-retry',
    screenshot: 'on-first-failure',
  },

  // Projects for different browsers/devices
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Optional: add Firefox or WebKit if needed
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});