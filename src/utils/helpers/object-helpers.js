import _ from "lodash";

export const updateObjectInArray = (oldArray, newObjProps) => _.uniqWith([...oldArray, newObjProps], _.isEqual);
