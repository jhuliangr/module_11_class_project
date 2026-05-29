import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { useSettings } from "#shared/settings";

const Layout: React.FC = () => {
  const settings = useSettings();
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: settings.home.name,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="skyatlas" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="star" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="gears" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
