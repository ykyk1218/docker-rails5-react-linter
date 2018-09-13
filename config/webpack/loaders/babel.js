module.exports = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react', 'stage-2']
  }
}
