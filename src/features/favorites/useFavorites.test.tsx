import AsyncStorage from "@react-native-async-storage/async-storage";
import { renderHook, waitFor } from "@testing-library/react-native";

import { type WeatherLocation } from "#shared/weather";

import { useFavorites } from "./useFavorites";

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe("Features > Favorites > useFavorites", () => {
  it("returns an empty list by default", async () => {
    const { result } = renderHook(() => useFavorites());

    await waitFor(() => {
      expect(result.current[0]).toEqual([]);
    });
  });

  it("loads favorites from storage", async () => {
    const favorites: WeatherLocation[] = [
      { name: "Barcelona", latitude: 41.385063, longitude: 2.173404 },
      { name: "Tokyo", latitude: 35.689487, longitude: 139.691711 },
    ];
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));

    const { result } = renderHook(() => useFavorites());

    await waitFor(() => {
      expect(result.current[0]).toEqual(favorites);
    });
  });
});
