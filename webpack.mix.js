const mix = require('laravel-mix')

mix.js('src/js/index.js', 'js')
  .js('src/js/users.js', 'js')
  .less('src/less/app.less', 'css')
  .setPublicPath('public')
  .extract(['vue', 'axios'])
  .version()
