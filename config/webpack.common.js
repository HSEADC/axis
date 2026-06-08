const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const htmlPages = require("./webpack.pages.js");
const path = require("path");


module.exports = {
  entry: {
    index: "./src/js/index.js",
    styleguide: "./src/js/styleguide.js",
    test: "./src/js/test1.js",
    test2: "./src/js/test2.js",
    test3: "./src/js/test3.js",
    search: "./src/js/search.js",
  },

  output: {
    filename: "[name].js",
    path: path.resolve('.', "docs"),
    publicPath: "/",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),

    new CopyWebpackPlugin({

      patterns: [
        {
          from: path.resolve(__dirname, "../src/share/CNAME"),
          to: path.resolve(__dirname, "../docs"),
        },
      ],
    }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "../src/partials/analytics.html"),
        priority: "replace",
        location: "head",
        template_filename: "*",
      },
    ]),
    ...htmlPages,
  ],

  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
};

