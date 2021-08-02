import { updateObjectInArray } from "./helpers/object-helpers";
import {
  checkFilledDate,
  returnDescriptionPickedDate,
  returnFilteredDates,
} from "./helpers/date-helpers";
import { returnDesiredImage } from "./helpers/images/image-helpers";

import { mockEventData } from "../../__mocks__/mock";

describe("object-helper util", () => {
  it("Positive object cases", () => {
    expect(
      updateObjectInArray(mockEventData.eventDataArr, mockEventData.eventData)
    ).toStrictEqual(mockEventData.eventDataArr);
    expect(
      updateObjectInArray(mockEventData.eventDataArr, mockEventData.eventData2)
    ).toStrictEqual([...mockEventData.eventDataArr, mockEventData.eventData2]);
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
      returnDescriptionPickedDate(
        mockEventData.eventDataArr,
        mockEventData.eventData.touchedDate
      )
    ).toMatchObject([mockEventData.eventData]);
  });

  it("Positive returnFilteredDates cases", () => {
    expect(
      returnFilteredDates(mockEventData.eventDataArr, mockEventData.eventData)
    ).toMatchObject({});
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
