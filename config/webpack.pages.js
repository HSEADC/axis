const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages("./src/pages/test.html", "./pages/test.html", ["index"]),
  createPages("./src/pages/category.html", "./pages/category.html", ["index"]),
  // createPages('./src/pages/test/test1.html', './pages/test/test1.html', ['index']),
  createPages("./src/pages/category/it.html", "./pages/category/it.html", [
    "index",
  ]),
  createPages("./src/styleguide.html", "./styleguide.html", ["styleguide"]),
];

module.exports = htmlPages;
