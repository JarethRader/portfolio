const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: `/`,
    pathinfo: true,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    crossOriginLoading: "anonymous",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8080,
    publicPath: "http://localhost:8080/",
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[id].css",
      ignoreOrder: true,
    }),
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
    // new ManifestPlugin(),
  ],
});
