export type ColorPalette = {
  brand: string;
  background: string;
  surface: string;
  body: string;
  muted: string;
  shadow: string;
};

export const light: ColorPalette = {
  brand: "#007aff",
  background: "#ffffff",
  surface: "#f2f2f7",
  body: "#000000",
  muted: "#888888",
  shadow: "rgba(0, 0, 0, 0.15)",
};

export const dark: ColorPalette = {
  brand: "#0a84ff",
  background: "#000000",
  surface: "#1c1c1e",
  body: "#ffffff",
  muted: "#8e8e93",
  shadow: "rgba(0, 0, 0, 0.5)",
};

// Named exports for backward compatibility (point to light theme)
export const brand = light.brand;
export const background = light.background;
export const body = light.body;
export const muted = light.muted;
export const shadow = light.shadow;
