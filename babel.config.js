module.exports = {
  presets: [
      '@babel/preset-env', // transforma o js moderno em js antigo
      ['@babel/preset-react', { // transforma o jsx em js
          runtime: 'automatic' // não precisa importar o react
      }],
    ]
};