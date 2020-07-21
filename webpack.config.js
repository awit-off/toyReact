const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: "./main.js",
  },
  output:{
    path:path.resolve(__dirname, './dist'),
    filename:'main.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  pragma: "YYReact.createElement",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./main.html'
    })
  ]
};
