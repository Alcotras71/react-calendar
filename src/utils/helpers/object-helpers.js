import _ from "lodash";

export const updateObjectInArray = (oldArray, newObjProps) => {
  let newArr = [...oldArray, newObjProps];
  return _.uniqWith(newArr, _.isEqual);
};
