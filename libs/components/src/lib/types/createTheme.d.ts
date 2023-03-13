// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createTheme from '@mui/material/styles/createTheme';

interface CustomTheme {
  custom: {
    zIndex: {
      something: number;
    };
  };
}

declare module '@mui/material/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends CustomTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomTheme {}
}
