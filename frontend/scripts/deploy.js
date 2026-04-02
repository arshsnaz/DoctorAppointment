// This script deploys the Vite React app to GitHub Pages using gh-pages
// Usage: npm run deploy

const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/<YOUR_GITHUB_USERNAME>/DoctorAppointment.git', // <-- CHANGE THIS
  user: {
    name: 'Your Name', // <-- CHANGE THIS
    email: 'your@email.com' // <-- CHANGE THIS
  },
  message: 'Deploy to GitHub Pages',
}, function(err) {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy complete!');
  }
});
