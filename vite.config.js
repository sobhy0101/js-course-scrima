import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.', // Set root to current directory
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add your main projects as separate entry points if needed
        'passenger-app': resolve(__dirname, 'practice/apps/learn-basics-and-passenger-counting-app/index.html'),
        'blackjack': resolve(__dirname, 'practice/apps/learn-basics-the-black-jack-game/index.html'),
        'chrome-extension': resolve(__dirname, 'practice/apps/learn-basics-build-a-chrome-extension/index.html'),
        'basketball-scoreboard': resolve(__dirname, 'practice/exams/solo-project-basketball-scoreboard/index.html'),
        'password-generator': resolve(__dirname, 'practice/exams/solo-project-password-generator/index.html'),
        'unit-converter': resolve(__dirname, 'practice/exams/solo-project-unit-converter/index.html'),
        'grok-quizzes': resolve(__dirname, 'practice/exams/grok-quizzes/index.html')
      }
    }
  }
})