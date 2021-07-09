import { EventData } from "../../types/types";
import moment from "moment";

export const checkFilledDate = (
  dateArray: Array<{ day: number; month: number }>,
  month: number,
  dayIter: number
): boolean | undefined => {
  return (
    dateArray.find((data) => data.month === month && data.day === dayIter) !==
    undefined
  );
};

export const returnDescriptionPickedDate = (
  dateArray: Array<EventData>,
  touchedDate: Date | null
): Array<EventData> | undefined => {
  return dateArray.filter(
    (data) =>
      moment(data.touchedDate).toISOString() ===
      moment(touchedDate).toISOString()
  );
};
