import { StyleSheet, View } from "react-native";

import TextField from "#design/elements/fields/Text";
import ToggleField from "#design/elements/fields/Toggle";
import FormGroup from "#design/elements/FormGroup";
import Typography from "#design/elements/Typegraphy";
import { useSettings, useSettingsSetter, useTheme } from "#shared/settings";

const App: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSettingsSetter();
  const colors = useTheme();

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Typography variant="title">Settings</Typography>

        <FormGroup label="Home Name">
          <TextField
            onChange={(value) =>
              setSettings({
                ...settings,
                home: {
                  ...settings.home,
                  name: value,
                },
              })
            }
            value={settings.home.name}
          />
        </FormGroup>

        <FormGroup label="Dark Mode">
          <ToggleField
            value={settings.theme === "dark"}
            onChange={(value) =>
              setSettings({ ...settings, theme: value ? "dark" : "light" })
            }
          />
        </FormGroup>
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
