import {AppProvider} from "@/providers/app.tsx";
import {Header} from "@/components/Header";
import {Box, Container, Typography} from "@mui/material";
import {ArticleList} from "@/features/article";
import {Footer} from "@/components/Footer";
import {useTranslation} from "@/features/language/hooks/useTranslation.ts";

const App = () => {
  const {t} = useTranslation()

  return (
    <AppProvider>
      <Box display="flex" flexDirection="column" height="100%">
        <Header/>

        <Container maxWidth="md" sx={{py: 3}}>
          <Typography variant="h4" component="h1" gutterBottom sx={{fontSize: "1.75rem",}} mb={0.5}>
            {t("今日のニュース")}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{fontSize: ".875rem"}} color="text.secondary" mb={3}>
            {t("{今日}")}
          </Typography>

          <ArticleList/>
        </Container>

        <Footer/>
      </Box>
    </AppProvider>
  );
};

export default App
