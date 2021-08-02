import { action, actions } from "@storybook/addon-actions";
import React from "react";
import { Story, Meta } from "@storybook/react";
import DayButton, { DayButtonType } from "./DayButton";
import { MapDispatchPropsType } from "./DatepickerContainer";

export default {
  title: "Datepicker/Day",
  component: DayButton,
  argTypes: {
    backgroundColor: {
      controls: { type: "color" },
    },
    width: {
      control: { type: "range", min: 50, max: 300, step: 10 },
    },
    height: {
      control: { type: "range", min: 50, max: 300, step: 10 },
    },
    children: {
      defaultValue: "12",
    },
  },
} as Meta;

const props = {
  checkPreviousDates: false,
  getDate: () => console.log("GET DATE"),
  toggleCard: () => console.log("TOGGLE CARD"),
};

const Template: Story<DayButtonType & MapDispatchPropsType> = (args) => (
  <DayButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...props,
};
