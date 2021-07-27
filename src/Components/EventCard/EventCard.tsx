import React, { useEffect, useState } from "react";
import { returnDescriptionPickedDate } from "../../utils/helpers/date-helpers";
import { PropsType } from "./EventCardContainer";
import EventForm from "./EventForm/EventForm";
import EventList from "./EventList/EventList";

const EventCard = ({
  isOpen,
  cardType,
  eventData,
  touchedDate,
  toggleCard,
  ...props
}: PropsType) => {
  const pickedData = returnDescriptionPickedDate(eventData, touchedDate);

  return (
    <div className={`event-card ${isOpen ? "active" : ""}`}>
      <div className="event-card__form-wrapper">
        {cardType === "eventForm" ? (
          <EventForm
            toggleCard={toggleCard}
            touchedDate={touchedDate}
            getDate={props.getDate}
            getEventData={props.getEventData}
          />
        ) : (
          <EventList
            pickedData={pickedData}
            toggleCard={toggleCard}
            getDate={props.getDate}
            removeRecord={props.removeRecord}
          />
        )}
      </div>
    </div>
  );
};

export default EventCard;
