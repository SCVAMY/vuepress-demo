const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "../..", dir);
}

// resolve LTE alias
module.exports = {
  context: path.resolve(__dirname, "../../"),
  resolve: {
    alias: {
      "@@": path.resolve(__dirname, resolve("node_modules/ibuild-portal-lte/src")),
      "@root": path.resolve(__dirname, resolve("node_modules/ibuild-portal-lte"))
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "jsx-loader",
        include: [resolve("node_modules/ibuild-portal-lte/src")]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-jsx"]
          }
        },
        include: [resolve("node_modules/ibuild-portal-lte/src"), resolve("store")]
      }
      // {
      //   test: /\.(ts|tsx)$/,
      //   // exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader"
      //     },
      //     {
      //       loader: "ts-loader",
      //       options: {
      //         appendTsSuffixTo: [/\.vue$/]
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
