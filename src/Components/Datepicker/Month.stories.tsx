import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockEventData } from "../../../__mocks__/mock";

import Month from "./Month";

export default {
  title: "Datepicker/Month",
  component: Month,
} as ComponentMeta<typeof Month>;

const Template: ComponentStory<typeof Month> = (args) => <Month {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  year: 2021,
  month: 6,
  firstDayOfWeek: 1,
  eventData: mockEventData.eventDataArr,
};
