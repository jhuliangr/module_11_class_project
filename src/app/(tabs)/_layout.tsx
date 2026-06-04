import { Tabs } from "expo-router";

import Icon from "#design/elements/Icon";
import { useSettings, useTheme } from "#shared/settings";

const Layout: React.FC = () => {
  const settings = useSettings();
  const colors = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.muted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: settings.home.name,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorites" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
