// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@mui/material/styles/createPalette';

interface Primary {
  '-50': string;
  '-45': string;
  '-40': string;
  '-30': string;
  '-25': string;
  '-20': string;
  '-15': string;
  '-10': string;
  main: string;
  '+10': string;
}

interface Secondary {
  '-30': string;
  '-20': string;
  '-10': string;
  main: string;
  '+15': string;
}

interface Gray {
  '-40': string;
  '-35': string;
  '-30': string;
  '-25': string;
  '-10': string;
  main: string;
  '+10': string;
  '+25': string;
}

interface Black {
  '-10': string;
  '+10': string;
  main: string;
}

interface White {
  main: string;
}

interface Green {
  '-45': string;
  '-20': string;
  '-10': string;
  '-5': string;
  main: string;
  '+10': string;
}

interface Red {
  '-30': string;
  '-20': string;
  '-10': string;
  '-5': string;
  main: string;
  '+10': string;
}

interface CustomPaletteOptions {
  custom?: {
    primary: Primary;
    secondary: Secondary;
    black: Black;
    gray: Gray;
    white: White;
    green: Green;
    red: Red;
  };
}

interface CustomPalette {
  custom: {
    primary: Primary;
    secondary: Secondary;
    black: Black;
    gray: Gray;
    white: White;
    green: Green;
    red: Red;
  };
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends CustomPaletteOptions {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends CustomPalette {}
}
