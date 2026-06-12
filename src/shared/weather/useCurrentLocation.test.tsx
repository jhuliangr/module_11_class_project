import AsyncStorage from "@react-native-async-storage/async-storage";
import { renderHook, waitFor } from "@testing-library/react-native";

import { getLocation, lookupLocation } from "#shared/device/location";

import { useCurrentLocation } from "./useCurrentLocation";

jest.mock("#shared/device/location", () => ({
  getLocation: jest.fn(),
  lookupLocation: jest.fn(),
}));

beforeEach(async () => {
  jest.clearAllMocks();
  await AsyncStorage.clear();
});

describe("Weather > useCurrentLocation", () => {
  it("uses the device location when available", async () => {
    jest
      .mocked(getLocation)
      .mockResolvedValue({ latitude: 41.385063, longitude: 2.173404 });
    jest.mocked(lookupLocation).mockResolvedValue("Here");

    const { result } = renderHook(() => useCurrentLocation());

    await waitFor(() => {
      expect(result.current).toEqual({
        name: "Here",
        latitude: 41.385063,
        longitude: 2.173404,
      });
    });
  });

  it("falls back to the cached location", async () => {
    jest.mocked(getLocation).mockResolvedValue(undefined);
    const cached = {
      name: "Tokyo",
      latitude: 35.689487,
      longitude: 139.691711,
    };
    await AsyncStorage.setItem("cached-location", JSON.stringify(cached));

    const { result } = renderHook(() => useCurrentLocation());

    await waitFor(() => {
      expect(result.current).toEqual(cached);
    });
  });

  it("falls back to Barcelona without device or cached location", async () => {
    jest.mocked(getLocation).mockResolvedValue(undefined);

    const { result } = renderHook(() => useCurrentLocation());

    await waitFor(() => {
      expect(result.current?.name).toEqual("Barcelona");
    });
  });
});
