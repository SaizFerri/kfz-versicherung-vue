
var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(path.join(__dirname, '../dist'), {
    user: {
        name: 'Adrian Saiz',
        email: 'adrian.saiz.ferri@outlook.com'
    },
    message: 'Auto-generated commit',
    repo: 'https://github.com/SaizFerri/SaizFerri.github.io.git',
    branch: 'master',
    logger: function(message) {
        console.log(message);
    }
}, (err) => {
    err && console.log(err);
})
