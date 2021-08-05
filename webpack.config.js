module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    symlinks: true,
    extensions: [ '.js', '.json', '.node' ]
  },
  optimization: {
    minimize: false,
    // moduleIds: 'named'
  },
  externalsPresets: { node: true },
  plugins: [],
}