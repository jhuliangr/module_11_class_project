import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

import { styles } from "#shared/styles";
import { CurrentWeather, Forecast } from "#shared/weather";

const App: React.FC = () => {
  const location = {
    name: "Barcelona",
    latitude: 41.385063,
    longitude: 2.173404,
  };
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <View style={styles.container}>
        <Text>Weather App</Text>

        <CurrentWeather location={location} />
        <Forecast location={location} />

        <Link href="/temp">Go to Temporary</Link>
      </View>
    </>
  );
};

export default App;
