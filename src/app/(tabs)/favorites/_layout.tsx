import { Stack } from "expo-router";

import { useTheme } from "#shared/settings";

const Layout: React.FC = () => {
  const colors = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.body,
      }}
    />
  );
};

export default Layout;
