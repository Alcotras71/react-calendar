import { EventData } from "../../types/types";
import moment from "moment";
import _ from "lodash";

export const checkFilledDate = (
  dateArray: Array<{ day: number; month: number }>,
  month: number | string,
  dayIter: number | string
): boolean | undefined => {
  return (
    dateArray instanceof Array &&
    dateArray.find((data) => data.month === +month && data.day === +dayIter) !==
      undefined
  );
};

export const returnDescriptionPickedDate = (
  dateArray: Array<EventData>,
  touchedDate: Date | null
): Array<EventData> | undefined => {
  return (
    dateArray &&
    dateArray.filter(
      (data) =>
        moment(data.touchedDate).toISOString() ===
        moment(touchedDate).toISOString()
    )
  );
};

export const returnFilteredDates = (
  dateArray: Array<EventData>,
  removedObject: EventData
): Array<EventData> => {
  return dateArray.filter((data: EventData) => !_.isEqual(data, removedObject));
};
