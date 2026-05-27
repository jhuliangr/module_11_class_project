import {
  requestForegroundPermissionsAsync,
  type LocationObject,
  getCurrentPositionAsync,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";

export default function useDeviceLocation(): LocationObject | null {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== PermissionStatus.GRANTED) {
        return;
      }

      const location = await getCurrentPositionAsync({});
      setLocation(location);
    })().catch((e: unknown) => console.error(e));
  }, []);

  return location;
}
