import {AppProvider} from "@/providers/app.tsx"
import {Header} from "@/components/Header"
import {Box, Container, Typography} from "@mui/material"
import {ArticleList} from "@/features/article"
import {Footer} from "@/components/Footer"
import {useTranslation} from "@/features/language"

const App = () => {
  const {t} = useTranslation()

  return (
    <AppProvider>
      <Box display="flex" flexDirection="column" minHeight="100%">
        <Header/>

        <Container maxWidth="md" sx={{py: {xs: 2, md: 3}}}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontSize: {xs: "1.45rem", md: "1.75rem"},
              mb: 0.5,
              whiteSpace: "nowrap"
            }}
          >
            {t("今日のニュース")}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{fontSize: ".875rem", whiteSpace: "nowrap"}}
            color="text.secondary"
            mb={3}
          >
            {t("{今日}")}
          </Typography>

          <ArticleList/>
        </Container>

        <Footer/>
      </Box>
    </AppProvider>
  )
}

export default App
