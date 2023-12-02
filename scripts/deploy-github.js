const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: `https://github.com/BeagleDad/new-photo-site.git`
  },
  () => {
    console.log('Deploy Complete!')
  }
)