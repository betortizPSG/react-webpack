const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // faz a ligação do html com o js

const isDevelopment = process.env.NODE_ENV !== 'production'; // verifica se o ambiente é de desenvolvimento ou produção
module.exports = {
  mode: isDevelopment ? 'development' : 'production', // modo de desenvolvimento ou produção
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // devtool para facilitar o debug
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // pasta de saída
    filename: 'bundle.js', // nome do arquivo de saída
  },
  resolve: {
    extensions: ['.js', '.jsx'], // extensões que serão utilizadas
  },
  devServer: {
    static: { // pasta que será servida
      directory: path.resolve(__dirname, 'dist'), // pasta de saída
    },
    port: 3000, // porta do servidor
    compress: true, // compactação
    open: true, // abre o navegador automaticamente
  },
  performance: {
    hints: false, // desabilita o aviso de limite de tamanho
    maxEntrypointSize: 512000, // tamanho máximo do arquivo de entrada
    maxAssetSize: 512000, // tamanho máximo do arquivo de saída
  },
  plugins: [
    new HtmlWebpackPlugin({ // plugin para ligar o html com o js
      template: path.resolve(__dirname, 'public', 'index.html'), // arquivo de entrada
    }),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/, // arquivos que terminam com .js ou .jsx
      exclude: /node_modules/, // não inclui a pasta node_modules
      use: 'babel-loader', // utiliza o babel-loader
    },
    {
      test: /\.scss$/, // arquivos que terminam com .css
      exclude: /node_modules/, // não inclui a pasta node_modules
      use: ['style-loader', 'css-loader', 'sass-loader'], // utiliza o style-loader e o css-loader
    },
    {
      test: /\.(png|jpe?g|gif)$/i, // arquivos que terminam com .png, .jpg, .jpeg ou .gif
      exclude: /node_modules/, // não inclui a pasta node_modules
      use: ['file-loader'], // utiliza o file-loader
    }
  ],
  },
};