import _ from "lodash";

export const updateObjectInArray = (oldArray, newObjProps) => _.uniqWith([...oldArray, newObjProps], _.isEqual);

export const updateObjectInObject = (oldObj, newObjProps) => _.uniqWith({ ...oldObj, newObjProps }, _.isEqual)