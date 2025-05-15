import { defineConfig } from 'cypress';
import { devServer } from '@cypress/vite-dev-server';
import react from '@vitejs/plugin-react';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // add any plugins or tasks here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        plugins: [react()],
      },
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
