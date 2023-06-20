import {Button, CircularProgress, Grid, ThemeProvider, Typography} from "@mui/material"
import {theme} from "@/theme.ts"
import {FC, ReactNode, Suspense} from "react"
import {QueryClientProvider} from "react-query"
import {queryClient} from "@/lib/react-query.ts"
import {ErrorBoundary} from "react-error-boundary"
import {useTranslation} from "@/features/language"

interface Props {
  children?: ReactNode;
}

export const AppProvider: FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Grid container width="100%" height="100%" alignItems="center" justifyContent="center">
            <Grid item><CircularProgress/></Grid>
          </Grid>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            {props.children}
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  )
}

const ErrorFallback = () => {
  const {t} = useTranslation()

  return (
    <Grid container width="100%" height="100%" alignItems="center" justifyContent="center" flexDirection="column">
      <Grid item mb={2}>
        <Typography color="#f56565">{t("エラーが発生しました")}</Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="error"
          onClick={() => window.location.assign(window.location.origin)}
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  )
}
