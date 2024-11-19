import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run build && npm run obfuscate && npm run preview',
    port: 4173,
    reuseExistingServer: true
  },

  testDir: 'e2e'
});
