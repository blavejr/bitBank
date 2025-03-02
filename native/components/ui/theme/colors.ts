import { vars } from "nativewind";

const LIGHT_TYPOGRAPHY_COLORS = {
'--color-typography-primary': '19 19 19',
};

const LIGHT_BACKGROUND_COLORS = {
  '--color-background-primary': '255 255 255',
};

const DARK_TYPOGRAPHY_COLORS = {
  '--color-typography-primary': '255 255 255',
};

const DARK_BACKGROUND_COLORS = {
  '--color-background-primary': '19 19 19',
};

const COLORS = {
  light: {
    ...LIGHT_TYPOGRAPHY_COLORS,
    ...LIGHT_BACKGROUND_COLORS,
  },
  dark: {
    ...DARK_TYPOGRAPHY_COLORS,
    ...DARK_BACKGROUND_COLORS,
  },
};

export const config = {
  light: vars(COLORS.light),
  dark: vars(COLORS.dark),
};

