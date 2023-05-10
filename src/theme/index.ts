import { colors } from './colors';
import { font } from './font';
import { typography } from './typography';

const theme = {
  colors,
  font,
  typography,
};

export type Theme = typeof theme;

export default theme;
