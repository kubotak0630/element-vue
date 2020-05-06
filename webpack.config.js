const path = require("path");
const outputPath = path.resolve(__dirname, "dist");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // エントリーポイントの設定
  entry: "./src/main.js",
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "bundle.js",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: outputPath,
  },
  module: {
    rules: [
      //babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { modules: false }]],
          plugins: [
            [
              "component",
              {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk",
              },
            ],
          ],
        },
      },
      //css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //SCSS
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      //url-loader
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: "url-loader",
      },
      //Vue loader
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          // `vue-loader` オプション
        },
      },
    ],
  },
  resolve: {
    alias: {
      // vue$: "vue/dist/vue.esm.js", //（完全版）
      vue$: "vue/dist/vue.runtime.esm.js", //runtime版
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: outputPath,
  },
  devtool: "source-map", //デバッグがオリジナルソースでできる
};
