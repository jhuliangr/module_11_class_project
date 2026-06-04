import "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { SettingsProvider, useSettings } from "#shared/settings";

const ThemedStatusBar: React.FC = () => {
  const { theme } = useSettings();
  return <StatusBar style={theme === "dark" ? "light" : "dark"} />;
};

const Layout: React.FC = () => {
  return (
    <SettingsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      <ThemedStatusBar />
    </SettingsProvider>
  );
};

export default Layout;
