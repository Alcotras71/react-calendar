const path = require("path");

module.exports = function ({ config }) {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  });
  return config;
};
