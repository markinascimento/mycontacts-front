/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components';
import { DefaultTheme } from 'styled.d';
import { defaultTheme } from '../styles/theme/default';

type ThemeTypes = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
