import React from "react";
import { PropsType } from "./EventCardContainer";
import EventForm from "./EventForm/EventForm";
import EventList from "./EventList/EventList";

const EventCard = ({ isOpen, cardType, ...props }: PropsType) => {
  return (
    <div className={`event-card ${isOpen ? "active" : ""}`}>
      <div className="event-card__form-wrapper">
        {cardType === "eventForm" ? (
          <EventForm
            toggleCard={props.toggleCard}
            touchedDate={props.touchedDate}
            getDate={props.getDate}
            getEventData={props.getEventData}
          />
        ) : (
          <EventList
            touchedDate={props.touchedDate}
            eventData={props.eventData}
            toggleCard={props.toggleCard}
            getDate={props.getDate}
          />
        )}
      </div>
    </div>
  );
};

export default EventCard;
