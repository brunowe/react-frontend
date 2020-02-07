module.exports = {
  presets: [
    /* altera funcionalidades do JS que o navegador ainda não suporta e.g.: import e export */
    "@babel/preset-env",
    /* altera as funcionalidades do React que o navegador ainda não suporta */
    "@babel/preset-react"
  ],
  plugins: [
    /* Permite utilizar state de maneira simplificada dentro de classes */
    "@babel/plugin-proposal-class-properties"
  ]
};
