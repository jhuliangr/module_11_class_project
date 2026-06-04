import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Typography from "#design/elements/Typegraphy";
import { subscribeDeviceMotion } from "#shared/device/sensors";
import { useTheme } from "#shared/settings";

const App: React.FC = () => {
  const colors = useTheme();
  const [values, setValues] = useState("");

  useEffect(
    () =>
      subscribeDeviceMotion((motion) => {
        setValues(`
        x: ${motion.accelerationIncludingGravity.x.toFixed(3)}
        y: ${motion.accelerationIncludingGravity.y.toFixed(3)}
        z: ${motion.accelerationIncludingGravity.z.toFixed(3)}`);
      }),
    [],
  );

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Typography variant="title">Device Motion</Typography>
        <Typography variant="muted">{values}</Typography>
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
