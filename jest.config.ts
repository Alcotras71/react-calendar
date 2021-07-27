// jest.config.ts
import type { Config } from "@jest/types";

// Синхронно загружаемый конфиг
const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["./config/setupTest.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  snapshotSerializers: ["./node_modules/enzyme-to-json/serializer"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testMatch: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
};
export default config;
