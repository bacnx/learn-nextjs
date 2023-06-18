import { Heebo } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const heebo = Heebo({
  weight: ['400', '500', '700'],
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
    light: '#EDF7FA',
  },
  text: {
    primary: '#21243D',
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
export let theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: heebo.style.fontFamily,
    button: {
      textTransform: 'none',
    },
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
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)
