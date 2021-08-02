module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/manager-webpack5",
  ],
  core: {
    builder: "webpack5",
  },
};
