import { render, userEvent } from "@testing-library/react-native";

import FormGroup from "#design/elements/FormGroup";
import { SettingsProvider } from "#shared/settings";

import Text from "./Text";

describe("Design > Elements > Fields > Text", () => {
  it("works", () => {
    render(<Text onChange={() => undefined} value="" />, {
      wrapper: SettingsProvider,
    });
  });

  it("handles keyboard", async () => {
    const callback = jest.fn();

    const { getByDisplayValue } = render(
      <Text onChange={callback} value="Value" />,
      { wrapper: SettingsProvider },
    );

    const value = getByDisplayValue("Value");

    await userEvent.type(value, "hello");
    expect(callback).toHaveBeenCalledTimes(5);
    expect(callback).toHaveBeenCalledWith("Valueh");
    expect(callback).toHaveBeenCalledWith("Valuee");
    expect(callback).toHaveBeenCalledWith("Valuel");
    expect(callback).toHaveBeenCalledWith("Valuel");
    expect(callback).toHaveBeenCalledWith("Valueo");
  });

  it("works with FormGroup", async () => {
    const callback = jest.fn();

    const { getByText, getByDisplayValue } = render(
      <FormGroup label="Text Field">
        <Text onChange={callback} value="Value" />
      </FormGroup>,
      { wrapper: SettingsProvider },
    );

    getByText("Text Field");
    getByDisplayValue("Value");
  });
});
