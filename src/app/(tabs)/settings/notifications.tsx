import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import TextField from "#design/elements/fields/Text";
import ToggleField from "#design/elements/fields/Toggle";
import FormGroup from "#design/elements/FormGroup";
import Typography from "#design/elements/Typegraphy";
import { createNotification } from "#shared/notifications";
import { useSettings, useSettingsSetter } from "#shared/settings";

const App: React.FC = () => {
  const settings = useSettings();
  const [testNotificationText, setTestNotificationText] = useState({
    title: "Full Title",
    body: "Exercitation nulla pariatur minim proident ullamco et pariatur.",
  });
  const setSettings = useSettingsSetter();

  return (
    <>
      <View style={styles.container}>
        <Typography variant="title">Notifications</Typography>

        <FormGroup label="Enable Notifications">
          <ToggleField
            onChange={(value) =>
              setSettings({
                ...settings,
                notifications: {
                  ...settings.notifications,
                  enabled: value,
                },
              })
            }
            value={settings.notifications.enabled}
          />
        </FormGroup>

        {settings.notifications.enabled && (
          <>
            <FormGroup label="Favorites Warnings">
              <ToggleField
                onChange={(value) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      favorites: value,
                    },
                  })
                }
                value={settings.notifications.favorites}
              />
            </FormGroup>
            <FormGroup
              label="Test notifications"
              style={styles.testNotification}
            >
              <TextField
                onChange={(v) =>
                  setTestNotificationText((prev) => ({ ...prev, title: v }))
                }
                value={testNotificationText.title}
              />
              <TextField
                onChange={(v) =>
                  setTestNotificationText((prev) => ({ ...prev, body: v }))
                }
                value={testNotificationText.body}
              />
              <Button
                title="Test Notification"
                onPress={() =>
                  createNotification({
                    title: testNotificationText.title,
                    short: "Short",
                    body: testNotificationText.body,
                  })
                }
              />
            </FormGroup>
          </>
        )}
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
  testNotification: {
    width: "100%",
    display: "flex",
    gap: 10,
  },
});
