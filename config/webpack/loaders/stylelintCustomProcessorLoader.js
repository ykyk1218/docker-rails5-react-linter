module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: [
        'babel-loader',
        'stylelint-custom-processor-loader'
      ],
      exclude: /node_modules/
    }
  ]
}
