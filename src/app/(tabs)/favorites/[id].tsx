import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

import { useFavorites } from "#features/favorites";
import { useTheme } from "#shared/settings";
import { CurrentWeather, Forecast } from "#shared/weather";

const App: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [favorites] = useFavorites();
  const location = favorites.find((favorite) => favorite.name === id);
  const colors = useTheme();

  return (
    <>
      <Stack.Screen
        options={{ title: `Favorite: ${location?.name ?? "--"}` }}
      />

      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <CurrentWeather location={location} />
        <Forecast location={location} />
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
