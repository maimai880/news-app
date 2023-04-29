import React from "react";
import {CircularProgress, Grid, ThemeProvider} from "@mui/material";
import {theme} from "@/theme.ts";

interface Props {
  children?: React.ReactNode;
}

export const AppProvider: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense
        fallback={
          <Grid container width="100%" height="100%" alignItems='center' justifyContent='center'>
            <Grid item><CircularProgress/></Grid>
          </Grid>
        }
      >
        {props.children}
      </React.Suspense>
    </ThemeProvider>
  );
};
//TODO: Reactインポートの廃止
