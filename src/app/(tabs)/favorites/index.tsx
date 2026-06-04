import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import Typography from "#design/elements/Typegraphy";
import { useFavorites } from "#features/favorites";
import { useTheme } from "#shared/settings";

const App: React.FC = () => {
  const [favorites] = useFavorites();
  const colors = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Favorites",
          headerBackground: () => (
            <View style={{ backgroundColor: colors.background }} />
          ),
          headerTitleStyle: { color: colors.body },
        }}
      />

      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {favorites.map((favorite) => (
          <Typography key={favorite.name} href={`/favorites/${favorite.name}`}>
            {favorite.name}
          </Typography>
        ))}
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
