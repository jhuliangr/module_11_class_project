import { act, renderHook } from "@testing-library/react-native";

import { dark, light } from "../design/foundations/colors";

import {
  SettingsProvider,
  useSettings,
  useSettingsSetter,
  useTheme,
} from "./settings";

describe("Settings", () => {
  it("provides the default settings", () => {
    const { result } = renderHook(() => useSettings(), {
      wrapper: SettingsProvider,
    });

    expect(result.current.theme).toEqual("light");
    expect(result.current.home.name).toEqual("Home");
  });

  it("updates the theme through the setter", () => {
    const { result } = renderHook(
      () => ({
        settings: useSettings(),
        set: useSettingsSetter(),
        theme: useTheme(),
      }),
      { wrapper: SettingsProvider },
    );

    expect(result.current.theme).toEqual(light);

    act(() => {
      result.current.set({ ...result.current.settings, theme: "dark" });
    });

    expect(result.current.theme).toEqual(dark);
  });

  it("throws without a provider", () => {
    jest.spyOn(console, "error").mockImplementation(() => undefined);

    expect(() => renderHook(() => useSettings())).toThrow(
      "Missing SettingsProvider.",
    );

    jest.restoreAllMocks();
  });
});
