import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { type WeatherLocation } from "#shared/weather";

const STORAGE_KEY = "favorites";

export function useFavorites(): [WeatherLocation[]] {
  const [favorites, setFavorites] = useState<WeatherLocation[]>([]);

  useEffect(() => {
    void (async () => {
      const cached = await AsyncStorage.getItem(STORAGE_KEY);
      if (!cached) return;

      const favorites = JSON.parse(cached) as WeatherLocation[];
      setFavorites(favorites);
    })();
  }, []);

  return [favorites];
}
