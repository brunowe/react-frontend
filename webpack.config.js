/* Escolhe a melhor "/" para o caminho do arquivo, dependendo do SO */
const path = require("path");

module.exports = {
  /* Seta o arquivo de entrada */
  entry: path.resolve(__dirname, "src", "index.js"),
  /* Seta onde o codigo transpilado sera armazenado */
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
