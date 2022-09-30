import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./../src/themes/default.theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <Story />
    </>
  </ThemeProvider>
)

export const decorators = [withMuiTheme]
