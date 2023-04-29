import {AppProvider} from "@/providers/app.tsx";
import {Header} from "@/components/Header";
import {Container, Typography} from "@mui/material";
import {format} from "date-fns";
import {ja} from "date-fns/locale";

const App = () => {
  return (
    <AppProvider>
      <Header/>

      <Container maxWidth="md" sx={{py: 3}}>
        <Typography variant="h4" component="h1" gutterBottom sx={{fontSize: "1.75rem",}}>
          今日のニュース
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{fontSize: ".875rem"}} color="rgb(95,99,104)">
          {format(new Date(), "M月d日E曜日", {locale: ja})}
        </Typography>

        {/*<ArticleList />*/}
      </Container>
    </AppProvider>
  );
};

export default App
