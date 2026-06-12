import { render } from "@testing-library/react-native";

import { SettingsProvider } from "#shared/settings";

import { Forecast } from "./Forecast";

const dailyResponse = {
  daily: {
    time: ["2026-06-12", "2026-06-13", "2026-06-14"],
    temperature_2m_max: [25.3, 24.1, 22.8],
    temperature_2m_min: [18.2, 17.5, 16.9],
    weather_code: [0, 3, 61],
  },
};

beforeEach(() => {
  jest.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(dailyResponse),
  } as unknown as Response);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Weather > Forecast", () => {
  it("works", async () => {
    const { findAllByText } = render(
      <Forecast
        location={{
          name: "Barcelona",
          latitude: 41.385063,
          longitude: 2.173404,
        }}
      />,
      { wrapper: SettingsProvider },
    );

    await findAllByText(/[0-9]\.[0-9] C$/);
  });
});
