import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiContainer: {
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
  },
})
