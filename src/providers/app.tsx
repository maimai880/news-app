import {CircularProgress, Grid, ThemeProvider} from "@mui/material";
import {theme} from "@/theme.ts";
import {FC, ReactNode, Suspense} from "react";
import {QueryClientProvider} from "react-query";
import {queryClient} from "@/lib/react-query.ts";

interface Props {
  children?: ReactNode;
}

export const AppProvider: FC<Props> = (props) => {
  // TODO: エラーハンドリング画面実装
  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Grid container width="100%" height="100%" alignItems='center' justifyContent='center'>
            <Grid item><CircularProgress/></Grid>
          </Grid>
        }
      >
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  );
};
