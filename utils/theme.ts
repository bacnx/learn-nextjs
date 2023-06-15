import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const palette = {
  primary: {
    main: '#FF6464',
    blur: '#FF646410',
  },
  secondary: {
    main: '#00A8CC',
  },
  dark: {
    main: '#21243D',
  },
  light: {
    main: '#8695A4',
  },
  error: {
    main: red.A400,
  },
}

// Create a theme instance.
export const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthMd: {
          maxWidth: 860,
          '@media (min-width: 600px)': {
            maxWidth: 860,
          },
        },
        maxWidthSm: {
          maxWidth: 680,

          '@media (min-width: 600px)': {
            maxWidth: 680,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: palette.dark.main,
      },
      styleOverrides: {
        root: {
          userSelect: 'none',
          '&:hover': {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: palette.dark.main,
        },
      },
    },
  },
})
