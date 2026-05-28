import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Typography from "#design/elements/Typegraphy";
import { createNotification } from "#shared/notifications";

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(async () => {
      await createNotification({
        title: "Full Title",
        short: "Short",
        body: "Exercitation nulla pariatur minim proident ullamco et pariatur.",
      });
    }, 2500);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Typography variant="title">Notifications</Typography>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
