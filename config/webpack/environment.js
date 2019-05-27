const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

environment.loaders.prepend('typescript', typescript)
environment.loaders.prepend('html', {
  test: /\.html$/,
  exclude: /node_modules/,
  loaders: ['html-loader'] 
})

module.exports = environment
