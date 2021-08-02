import React from "react";
import { Story, Meta } from "@storybook/react";
import { EventCard, PropsType } from "./EventCardContainer";
import { mockEventData } from "../../../__mocks__/mock";

export default {
  title: "Datepicker/EventCard",
  component: EventCard,
} as Meta;

const props = {
  eventData: mockEventData.eventDataArr,
  touchedDate: new Date(mockEventData.eventData.touchedDate),
  isOpen: true,
};

const Template: Story<PropsType> = (args) => <EventCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...props,
};
