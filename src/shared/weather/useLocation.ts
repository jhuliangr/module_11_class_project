import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";

import { type WeatherLocation } from "./types";

// const STORAGE_KEY = "current-location";

export function useDeviceLocation(): WeatherLocation | undefined {
  const [location, setLocation] = useState<WeatherLocation | undefined>();

  useEffect(() => {
    // (async () => {
    // 	let { status } = await requestForegroundPermissionsAsync();
    // 	if (status !== "granted") {
    // 		return;
    // 	}
    //   const cachedLocation = await AsyncStorage.getItem(STORAGE_KEY)
    //   if (cachedLocation) {
    //     const location = JSON.parse(cachedLocation) as WeatherLocation
    //     setLocation(location)
    //     return
    //   }

    // 	let location = await getCurrentPositionAsync({});
    // 	setLocation({
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //     name: "Barcelona"
    //   });
    // })();
    setLocation({
      name: "Barcelona",
      latitude: 41.385063,
      longitude: 2.173404,
    });
  }, []);

  return location;
}
