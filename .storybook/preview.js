import { configureActions } from "@storybook/addon-actions";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
configureActions({
  depth: 100,
  limit: 20,
});

import "../src/scss/global/global.scss";
import "../src/scss/global/reset.scss";
import "../src/Components/Datepicker/datepicker.scss";
