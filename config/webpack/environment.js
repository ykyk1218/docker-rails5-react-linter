const { environment } = require('@rails/webpacker')
const eslint = require('./loaders/eslint')
const babel = require('./loaders/babel')
const stylelintCustomProcessorLoader = require('./loaders/stylelintCustomProcessorLoader')
const StyleLintPlugin = require('stylelint-webpack-plugin');

environment.loaders.append('eslint', eslint)
environment.loaders.append('babel', babel)
environment.loaders.append('stylelintCustomProcessorLoader', stylelintCustomProcessorLoader)
environment.plugins.prepend(
  'StyleLintPlugin',
  new StyleLintPlugin()
)
module.exports = environment
