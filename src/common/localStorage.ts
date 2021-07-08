import { EventData } from "../types/types";

export const setLocalStorageEventData = (eventData: EventData) => {
  localStorage.setItem("eventData", JSON.stringify(eventData));
};
