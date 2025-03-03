import { vars } from "nativewind";

const LIGHT_TYPOGRAPHY_COLORS = {
  '--color-typography-primary': '0, 51, 102',
  '--color-typography-secondary': '0, 102, 153',
};

const LIGHT_BACKGROUND_COLORS = {
  '--color-background-primary': '255 255 255',
  '--color-background-secondary': '0 153 204',
};

const LIGHT_BUTTON_COLORS = {
  '--color-button-primary': '102 204 255',
};

const DARK_TYPOGRAPHY_COLORS = {
  '--color-typography-primary': '255 255 255',
};

const DARK_BACKGROUND_COLORS = {
  '--color-background-primary': '0, 51, 102',
  '--color-background-secondary': '102 204 255',
};

const DARK_BUTTON_COLORS = {
  '--color-button-primary': '0 153 204',
};

const COLORS = {
  light: {
    ...LIGHT_TYPOGRAPHY_COLORS,
    ...LIGHT_BACKGROUND_COLORS,
    ...LIGHT_BUTTON_COLORS,
  },
  dark: {
    ...DARK_TYPOGRAPHY_COLORS,
    ...DARK_BACKGROUND_COLORS,
    ...DARK_BUTTON_COLORS,
  },
};

export const config = {
  light: vars(COLORS.light),
  dark: vars(COLORS.dark),
};

