import { render } from "@testing-library/react-native";

import { Text } from "react-native";

import { SettingsProvider } from "#shared/settings";

import Card from "./Card";

describe("Design > Elements > Card", () => {
  it("works", () => {
    render(
      <Card>
        <Text>Hello</Text>
      </Card>,
      { wrapper: SettingsProvider },
    );
  });
});
