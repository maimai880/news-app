import {ArticleCard} from './ArticleCard';
import {FC} from 'react';
import {Box, CircularProgress, Grid, Typography} from '@mui/material';
import {useAtom} from 'jotai';
import {countryAtom, useTranslation} from "@/features/language";
import {useArticles} from "@/features/article/api/getArticles.ts";
import {queryAtom} from "@/features/article";

export const ArticleList: FC = () => {
  const [country] = useAtom(countryAtom);
  const [query] = useAtom(queryAtom);
  const {data: articles, isLoading} = useArticles({country, query});

  const {t} = useTranslation()

  if (isLoading) {
    return (
      <Grid container width="100%" height="100%" alignItems='center' justifyContent='center'>
        <Grid item><CircularProgress/></Grid>
      </Grid>
    );
  } else if (!articles?.length) {
    return (
      <Grid container width="100%" height="100%" alignItems='center' justifyContent='center' flexDirection="column">
        <Grid item>
          <img
            src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
            alt="Empty Tree"
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h3" fontWeight="bold" color="text.secondary">
            {t("一致する検索結果がありません")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="text.secondary">
            {t("検索条件を変更して再度お試しください")}
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Box px={3}>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.url}/>
        ))}
      </Box>
    );
  }
};
