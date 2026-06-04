import { Drawer } from "expo-router/drawer";

import { useTheme } from "#shared/settings";

const Layout: React.FC = () => {
  const colors = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.body,
        drawerStyle: { backgroundColor: colors.background },
        drawerActiveTintColor: colors.brand,
        drawerInactiveTintColor: colors.muted,
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Settings" }} />
      <Drawer.Screen
        name="notifications"
        options={{ title: "Notifications" }}
      />
      <Drawer.Screen name="motion" options={{ title: "Device Motion" }} />
      <Drawer.Screen name="flat-list" options={{ title: "FlatList" }} />
      <Drawer.Screen name="section-list" options={{ title: "SectionList" }} />
    </Drawer>
  );
};

export default Layout;
