import {createTheme} from "@mui/material"
import {blue} from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 850,
      md: 900,
      lg: 1100,
      xl: 1536,
    }
  }
})
