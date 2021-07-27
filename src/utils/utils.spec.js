import { updateObjectInArray } from "./helpers/object-helpers";
import {
  checkFilledDate,
  returnDescriptionPickedDate,
  returnFilteredDates,
} from "./helpers/date-helpers";
import { returnDesiredImage } from "./helpers/images/image-helpers";

const mockEventDataArr = [
  {
    touchedDate: "2021-07-27T21:00:00.000Z",
    startTime: "12:00",
    endTime: "12:30",
    eventName: "mocki",
  },
];
const mockEventData = {
  touchedDate: "2021-07-27T21:00:00.000Z",
  startTime: "12:00",
  endTime: "12:30",
  eventName: "mocki",
};
const mockEventData2 = {
  touchedDate: "2021-08-27T21:00:00.000Z",
  startTime: "11:00",
  endTime: "15:30",
  eventName: "mocddd",
};

describe("object-helper util", () => {
  it("Positive object cases", () => {
    expect(updateObjectInArray(mockEventDataArr, mockEventData)).toStrictEqual(
      mockEventDataArr
    );
    expect(
      updateObjectInArray(mockEventDataArr, mockEventData2)
    ).toStrictEqual([...mockEventDataArr, mockEventData2]);
  });

  it("Negative object cases", () => {
    expect(updateObjectInArray("", "")).toStrictEqual([""]);
  });
});

describe("date-helpers utils", () => {
  const mockDateArray = [{ day: 8, month: 5 }];

  it("Positive checkFilledDate cases", () => {
    expect(checkFilledDate(mockDateArray, 5, 8)).toBeTruthy();
    expect(checkFilledDate(mockDateArray, "5", "8")).toBeTruthy();
  });

  it("Negative checkFilledDate cases", () => {
    expect(checkFilledDate(mockDateArray, null, "10")).toBeFalsy();
    expect(checkFilledDate(54, null, "10")).toBeFalsy();
    expect(checkFilledDate(mockDateArray, 10, 5)).toBeFalsy();
  });

  it("Positive returnDescriptionPickedDate cases", () => {
    expect(
      returnDescriptionPickedDate(mockEventDataArr, mockEventData.touchedDate)
    ).toMatchObject(mockEventDataArr);
  });

  it("Positive returnFilteredDates cases", () => {
    expect(returnFilteredDates(mockEventDataArr, mockEventData)).toMatchObject(
      {}
    );
  });
});

describe("image-helpers utils", () => {
  const mockImageArr = [
    {
      key: "01d",
      value: "d01",
    },
    {
      key: "02d",
      value: "d02",
    },
    {
      key: "03d",
      value: "d03",
    },
  ];

  it("Positive returnDesiredImage cases", () => {
    expect(returnDesiredImage(mockImageArr, "02d")).toMatchObject(
      mockImageArr[1]
    );
  });

  it("Negative returnDesiredImage cases", () => {
    expect(returnDesiredImage("fdsag", "2342")).toBe(undefined);
  });
});
