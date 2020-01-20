const path = require('path');
const nodeModulesDirectory = path.resolve(__dirname, './node_modules');

module.exports = {
  entry: './src/index.jsx',
  mode: "none",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [nodeModulesDirectory, "./src/containers", "./src/components"],
    extensions: [" ", ".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  }
};