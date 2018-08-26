const { environment } = require('@rails/webpacker')
const eslint = require('./loaders/eslint')
const StyleLintPlugin = require('stylelint-webpack-plugin');

environment.loaders.append('eslint', eslint)
environment.plugins.prepend(
  'StyleLintPlugin',
  new StyleLintPlugin()
)
module.exports = environment
