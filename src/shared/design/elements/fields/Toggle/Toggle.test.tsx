import { render, userEvent } from "@testing-library/react-native";

import FormGroup from "#design/elements/FormGroup";
import { SettingsProvider } from "#shared/settings";

import Toggle from "./Toggle";

describe("Design > Elements > Fields > Toggle", () => {
  it("works", () => {
    render(<Toggle onChange={() => undefined} value={true} />, {
      wrapper: SettingsProvider,
    });
  });

  it("handles keyboard", async () => {
    const { getByRole } = render(
      <Toggle onChange={() => undefined} value={true} />,
      { wrapper: SettingsProvider },
    );

    const value = getByRole("switch");
    await userEvent.press(value);
  });

  it("works with FormGroup", () => {
    const { getByText, getByRole } = render(
      <FormGroup label="Toggle Field">
        <Toggle onChange={() => undefined} value={true} />
      </FormGroup>,
      { wrapper: SettingsProvider },
    );

    getByText("Toggle Field");
    getByRole("switch");
  });
});
