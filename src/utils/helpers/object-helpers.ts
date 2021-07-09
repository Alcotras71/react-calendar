import _ from "lodash";
import { EventData } from "../../types/types";

export const updateObjectInArray = (
  oldArray: Array<EventData>,
  newObjProps: EventData
) => _.uniqWith([...oldArray, newObjProps], _.isEqual);
