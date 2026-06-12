import type * as ExpoNotifications from "expo-notifications";
import { Platform } from "react-native";

type NotificationsModule = typeof ExpoNotifications;

// expo-notifications requires a development build and is not available in Expo Go.
// We load it conditionally so the app degrades gracefully in environments where
// the native module is not present.

let Notifications: NotificationsModule | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Notifications = require("expo-notifications") as NotificationsModule;
} catch {
  // not available in this environment
}

let configured: boolean | null = null;

export async function configureNotifications(): Promise<boolean> {
  if (configured !== null) return configured;

  if (!Notifications) {
    configured = false;
    return false;
  }

  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== Notifications.PermissionStatus.GRANTED) {
    console.warn("Permission to show notifications was denied");

    configured = false;
    return false;
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });

  configured = true;
  return true;
}

export async function createNotification({
  title,
  short,
  body,
}: {
  title: string;
  short?: string;
  body: string;
}): Promise<void> {
  if (!Notifications) return;

  await configureNotifications();

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      subtitle: Platform.select({ android: short }) ?? "",
      body,
    },
    trigger: null,
  });
}
