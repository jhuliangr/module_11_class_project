import { render } from "@testing-library/react-native";

import { SettingsProvider } from "#shared/settings";

import { CurrentWeather } from "./CurrentWeather";

const currentResponse = {
  current: {
    weather_code: 0,
    temperature_2m: 24.6,
    wind_speed_10m: 12.4,
    relative_humidity_2m: 58,
    uv_index: 6.2,
  },
};

beforeEach(() => {
  jest.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(currentResponse),
  } as unknown as Response);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Weather > CurrentWeather", () => {
  it("works", async () => {
    const { findByText } = render(
      <CurrentWeather
        location={{
          name: "Barcelona",
          latitude: 41.385063,
          longitude: 2.173404,
        }}
      />,
      { wrapper: SettingsProvider },
    );

    await findByText("Barcelona");
    await findByText("24.6 C");
  });
});
