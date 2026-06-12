import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useGetDailyWeather } from "./useGetDailyWeather";

const dailyResponse = {
  daily: {
    time: ["2026-06-12", "2026-06-13"],
    temperature_2m_max: [25.3, 24.1],
    temperature_2m_min: [18.2, 17.5],
    weather_code: [0, 61],
  },
};

const location = {
  name: "Barcelona",
  latitude: 41.385063,
  longitude: 2.173404,
};

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Weather > useGetDailyWeather", () => {
  it("fetches and maps the daily forecast", async () => {
    jest.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(dailyResponse),
    } as unknown as Response);

    const { result } = renderHook(() => useGetDailyWeather({ location }));

    await waitFor(() => {
      expect(result.current).toEqual([
        {
          day: "2026-06-12",
          temperatureMax: 25.3,
          temperatureMin: 18.2,
          condition: "Clear",
        },
        {
          day: "2026-06-13",
          temperatureMax: 24.1,
          temperatureMin: 17.5,
          condition: "Light Rain",
        },
      ]);
    });
  });

  it("does not fetch without a location", async () => {
    const fetchSpy = jest.spyOn(globalThis, "fetch");

    const { result } = renderHook(() => useGetDailyWeather({}));

    await act(async () => undefined);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(result.current).toBeUndefined();
  });
});
