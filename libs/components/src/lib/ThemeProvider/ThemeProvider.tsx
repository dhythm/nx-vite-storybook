import {
  createTheme,
  outlinedInputClasses,
  selectClasses,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC, PropsWithChildren, useMemo } from 'react';

const color: Theme['palette']['custom'] = {
  primary: {
    '-50': '#F1F8FE',
    '-45': '#D9EAFE',
    '-40': '#C0DDFD',
    '-30': '#8FC3FB',
    '-25': '#77B6FA',
    '-20': '#5EA8F9',
    '-15': '#469BF8',
    '-10': '#2D8EF7',
    main: '#0974E8',
    '+10': '#075BB7',
  },
  secondary: {
    '-30': '#FFF3D3',
    '-20': '#FFE5A0',
    '-10': '#FFD86D',
    main: '#FFCA3A',
    '+15': '#ECAD00',
  },
  black: {
    '-10': '#3D4044',
    '+10': '#72777E',
    main: '#252729',
  },
  gray: {
    '-40': '#F7F7F8',
    '-35': '#EAEBEC',
    '-30': '#DCDEE0',
    '-25': '#CFD1D4',
    '-10': '#A7ABAF',
    main: '#8C9197',
    '+10': '#72777E',
    '+25': '#4E5156',
  },
  white: {
    main: '#FFFFFF',
  },
  green: {
    '-45': '#E1F5F0',
    '-20': '#80D7BF',
    '-10': '#59CBAC',
    '-5': '#46C4A2',
    main: '#3AB795',
    '+10': '#2E9075',
  },
  red: {
    '-30': '#FFF2F2',
    '-20': '#FFBFC1',
    '-10': '#FF8C8F',
    '-5': '#FF7277',
    main: '#FF595E',
    '+10': '#FF262D',
  },
};

export const ThemeProvider: FC<
  PropsWithChildren<{ mode?: 'light' | 'dark' | null }>
> = ({ children, mode: _mode }) => {
  const mode = _mode ?? 'light';
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 20,
                boxSizing: 'border-box',
                textTransform: 'none',
              },
              startIcon: {
                marginRight: 4,
              },
              iconSizeMedium: {
                '&> *:first-child': {
                  fontSize: 13,
                },
              },
              contained: {
                border: 'none',
                boxShadow: 'none',
                color: color.white.main,
                transition: 'none',
                '&:hover': {
                  boxShadow: 'none',
                },
                '&$disabled': {
                  color: color.white.main,
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              rounded: {
                borderRadius: 3,
              },
              elevation1: {
                boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.2)',
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: 'none',
                },
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              input: {
                fontWeight: 400,
                backgroundColor: color.white.main,
                height: '1.1876em',
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: ({ ownerState }) => ({
                [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
                  {
                    borderColor: color.primary.main,
                    borderWidth: 1,
                  },
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                  borderColor: color.gray['-30'],
                },
                [`&:hover.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
                  {
                    borderColor: color.primary.main,
                  },
                ...(ownerState.multiline && {
                  padding: 0,
                }),
              }),
              notchedOutline: {
                borderRadius: 3,
                borderColor: color.gray['-30'],
              },
              input: {
                padding: '12px 8px',
              },
              adornedStart: {
                paddingLeft: '0px',
              },
              adornedEnd: {
                paddingRight: '0px',
              },
            },
          },
          MuiInputAdornment: {
            styleOverrides: {
              positionStart: {
                marginRight: '4px',
              },
              positionEnd: {
                marginLeft: 0,
              },
            },
          },
          MuiFormHelperText: {
            styleOverrides: {
              root: {
                color: color.red.main,
                fontSize: '14px',
                lineHeight: '1.5',
                marginTop: '8px',
              },
              contained: {
                marginLeft: 0,
                marginRight: 0,
              },
            },
          },
          MuiCheckbox: {
            styleOverrides: {
              colorPrimary: {
                '&$checked': {
                  '&:hover': {
                    backgroundColor: 'none',
                  },
                },
              },
            },
          },
          MuiRadio: {
            styleOverrides: {
              colorPrimary: {
                '&$checked': {
                  '&:hover': {
                    backgroundColor: 'none',
                  },
                },
              },
            },
          },
          MuiPopover: {
            styleOverrides: {
              paper: {
                border: `1px solid ${
                  mode === 'light' ? color.gray['-30'] : color.gray['+10']
                }`,
              },
            },
            defaultProps: {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            },
          },
          MuiMenu: {
            styleOverrides: {
              paper: {
                background: mode === 'dark' ? color.black['-10'] : undefined,
              },
            },
          },
          MuiListItem: {
            styleOverrides: {
              root: {
                '&$selected': {
                  backgroundColor: color.gray['-40'],
                  '&:hover': {
                    backgroundColor: color.gray['-40'],
                  },
                },
                ...(mode === 'dark'
                  ? {
                      '&$selected': {
                        backgroundColor: color.black['+10'],
                        '&:hover': {
                          backgroundColor: color.black['+10'],
                        },
                      },
                    }
                  : {}),
              },
              button: {
                '&:hover': {
                  backgroundColor: color.gray['-40'],
                },
                ...(mode === 'dark'
                  ? {
                      '&:hover': {
                        backgroundColor: color.black['+10'],
                      },
                    }
                  : {}),
              },
            },
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                marginRight: 8,
                minWidth: 'auto',
              },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                marginTop: 0,
                marginBottom: 0,
              },
            },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                minHeight: 36,
                fontSize: 14,
                ...(mode === 'dark'
                  ? {
                      color: color.white.main,
                    }
                  : {}),
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                padding: 32,
                boxSizing: 'border-box',
                borderRadius: 6,
              },
            },
          },
          MuiDialogTitle: {
            styleOverrides: {
              root: {
                padding: '0 0 24px 0',
              },
            },
          },
          MuiDialogContent: {
            styleOverrides: {
              root: {
                padding: '0 0 24px 0',
              },
            },
          },
          MuiDialogActions: {
            styleOverrides: {
              root: {
                padding: 0,
                justifyContent: 'center',
              },
              spacing: {
                '& > :not(:first-child)': {
                  marginLeft: 16,
                },
              },
            },
          },
          MuiDialogContentText: {
            styleOverrides: {
              root: {
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 12,
                paddingBottom: 12,
                marginBottom: 12,
              },
            },
          },
          MuiSlider: {
            styleOverrides: {
              valueLabel: {
                color: color.primary.main,
              },
            },
          },
          MuiSnackbarContent: {
            styleOverrides: {
              root: {
                borderRadius: 6,
                whiteSpace: 'normal',
                position: 'relative',
                color: color.white.main,
              },
            },
          },
          MuiBadge: {
            styleOverrides: {},
          },
          MuiSelect: {
            styleOverrides: {
              select: {
                '&:focus': {
                  backgroundColor: color.white.main,
                },
              },
              icon: {
                width: 24,
                height: 24,
                color: color.gray.main,
                [`&.${selectClasses.disabled}`]: {
                  color: color.gray.main,
                },
                top: 'calc(50% - 12px)',
              },
              iconOpen: {
                transform: 'rotate(0)',
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                lineHeight: 1.75,
              },
            },
          },
        },
        palette: {
          mode,
          primary: {
            main: color.primary.main,
          },
          secondary: {
            main: color.secondary.main,
          },
          error: {
            main: color.red.main,
          },
          custom: color,
          action: {
            hoverOpacity: 0,
            disabled: color.gray['-30'],
          },
          text: {
            primary: color.black.main,
            secondary: color.white.main,
            disabled: color.gray.main,
          },
          common: {
            black: color.black.main,
          },
        },
        typography: {
          fontFamily:
            "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue','Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo','MS Gothic', sans-serif",
          button: {
            fontWeight: 'normal',
          },
          h1: {
            fontSize: 32,
            lineHeight: 1.3,
            fontWeight: 600,
            color: color.black.main,
          },
          h2: {
            fontSize: 28,
            lineHeight: 1.3,
            fontWeight: 600,
            color: color.black.main,
          },
          h3: {
            fontSize: 20,
            lineHeight: 1.3,
            fontWeight: 600,
            color: color.black.main,
          },
          h4: {
            fontSize: 18,
            lineHeight: 1.3,
            fontWeight: 600,
            color: color.black.main,
          },
          h5: {
            fontSize: 16,
            lineHeight: 1.3,
            fontWeight: 600,
            color: color.black.main,
          },
          h6: {
            fontSize: 14,
            lineHeight: 1.3,
            fontWeight: 600,
            color: color.black.main,
          },
          body1: {
            fontSize: 16,
            lineHeight: 1.5,
            color: color.black.main,
          },
          body2: {
            fontSize: 14,
            lineHeight: 1.5,
            color: color.black.main,
          },
        },
        shadows: [
          'none',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
          '2px 4px 8px rgba(0, 0, 0, 0.2)',
        ],
        spacing: 4,
        custom: {
          zIndex: {
            something: 1000,
          },
        },
        shape: {
          borderRadius: 3,
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
