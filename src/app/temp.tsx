import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import Typography from "#design/elements/Typegraphy";
import { useTheme } from "#shared/settings";

const App: React.FC = () => {
  const colors = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: "Temporary" }} />

      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Typography variant="title">Temporary</Typography>
        <Typography href="/">Go Home</Typography>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
