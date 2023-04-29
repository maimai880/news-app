import {AppProvider} from "@/providers/app.tsx";
import {Header} from "@/components/Header";
import {Box, Container, Typography} from "@mui/material";
import {format} from "date-fns";
import {ja} from "date-fns/locale";
import {ArticleList} from "@/features/article";
import {Footer} from "@/components/Footer";

const App = () => {
  return (
    <AppProvider>
      <Box display="flex" flexDirection="column" height="100%">
        <Header/>

        <Container maxWidth="md" sx={{py: 3}}>
          <Typography variant="h4" component="h1" gutterBottom sx={{fontSize: "1.75rem",}} mb={0.5}>
            今日のニュース
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{fontSize: ".875rem"}} color="text.secondary" mb={3}>
            {format(new Date(), "M月d日E曜日", {locale: ja})}
          </Typography>

          <ArticleList/>
        </Container>

        <Footer/>
      </Box>
    </AppProvider>
  );
};

export default App
