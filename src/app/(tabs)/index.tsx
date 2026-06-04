import { StyleSheet, View } from "react-native";

import Typography from "#design/elements/Typegraphy";
import { useTheme } from "#shared/settings";
import { CurrentWeather, Forecast, useCurrentLocation } from "#shared/weather";

const App: React.FC = () => {
  const location = useCurrentLocation();
  const colors = useTheme();

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <CurrentWeather location={location} />
        <Forecast location={location} />

        <Typography href="/temp">Go to Temporary</Typography>
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
