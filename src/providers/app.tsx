import {CircularProgress, Grid, ThemeProvider} from "@mui/material";
import {theme} from "@/theme.ts";
import {FC, ReactNode, Suspense} from "react";

interface Props {
  children?: ReactNode;
}

export const AppProvider: FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Grid container width="100%" height="100%" alignItems='center' justifyContent='center'>
            <Grid item><CircularProgress/></Grid>
          </Grid>
        }
      >
        {props.children}
      </Suspense>
    </ThemeProvider>
  );
};
