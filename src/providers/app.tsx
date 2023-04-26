import React from "react";
import {CircularProgress, Grid} from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

export const AppProvider: React.FC<Props> = (props) => {
  return (
    <React.Suspense
      fallback={
        <Grid container width="100%" height="100%" alignItems='center' justifyContent='center'>
          <Grid item><CircularProgress/></Grid>
        </Grid>
      }
    >
      {props.children}
    </React.Suspense>
  );
};
