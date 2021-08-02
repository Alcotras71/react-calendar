import React from "react";
import {
  appReducer,
  hideLoader,
  HIDE_LOADER,
  initialState,
  showLoader,
  SHOW_LOADER,
} from "./appReducer";

describe("appReducer", () => {
  describe("check reducer work", () => {
    it("returns the initial state", () => {
      expect(appReducer(undefined, {})).toEqual(initialState);
    });

    it("handles show loader", () => {
      expect(appReducer(initialState, { type: SHOW_LOADER })).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it("handles hide loader", () => {
      expect(appReducer(initialState, { type: HIDE_LOADER })).toEqual({
        ...initialState,
        loading: false,
      });
    });
  });

  describe("check action creators", () => {
    it("showLoader AC", () => {
      expect(showLoader()).toStrictEqual({ type: SHOW_LOADER });
    });

    it("hideLoader AC", () => {
      expect(hideLoader()).toStrictEqual({ type: HIDE_LOADER });
    });
  });
});
