import { ThemeOptions } from "@mui/material"
import { createTheme } from "@mui/material/styles"

// Light theme overrides taken from Figma design
const defaultLightThemeConfig: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#21B6A8",
      light: "#65E9D9",
      dark: "#3D8479",
      contrastText: "#FFF"
    },
    grey: {
      200: "#EFEFEF"
    },
    text: {
      primary: "#1B1B1B",
      secondary: "#616161"
    }
  },
  typography: {
    fontFamily: `'Plus Jakarta Sans', sans-serif`
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 8
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 14
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: 18
        }
      }
    }
  }
}

const theme = createTheme(defaultLightThemeConfig)

export default theme
