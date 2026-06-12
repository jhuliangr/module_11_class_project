import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useGetWeahter } from "./useGetWeahter";

const currentResponse = {
  current: {
    weather_code: 0,
    temperature_2m: 24.6,
    wind_speed_10m: 12.4,
    relative_humidity_2m: 58,
    uv_index: 6.2,
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

describe("Weather > useGetWeahter", () => {
  it("fetches and maps the current weather", async () => {
    jest.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(currentResponse),
    } as unknown as Response);

    const { result } = renderHook(() => useGetWeahter({ location }));

    await waitFor(() => {
      expect(result.current).toEqual({
        condition: "Clear",
        temperature: 24.6,
        wind: 12.4,
        humidity: 58,
        uv: 6.2,
      });
    });
  });

  it("does not fetch without a location", async () => {
    const fetchSpy = jest.spyOn(globalThis, "fetch");

    const { result } = renderHook(() => useGetWeahter({}));

    await act(async () => undefined);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(result.current).toBeUndefined();
  });

  it("returns undefined when the response is not ok", async () => {
    jest
      .spyOn(globalThis, "fetch")
      .mockResolvedValue({ ok: false } as Response);

    const { result } = renderHook(() => useGetWeahter({ location }));

    await act(async () => undefined);
    expect(result.current).toBeUndefined();
  });
});
