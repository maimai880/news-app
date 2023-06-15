import {ArticleCard} from './ArticleCard';
import {FC} from 'react';
import {Box, Card, Grid, Skeleton, Typography} from '@mui/material';
import {useAtom} from 'jotai';
import {countryAtom, useTranslation} from "@/features/language";
import {useArticles} from "@/features/article/api/getArticles.ts";
import {queryAtom} from "@/features/article";

export const ArticleList: FC = () => {
  const [country] = useAtom(countryAtom);
  const [query] = useAtom(queryAtom);
  const {data: articles, isLoading} = useArticles({country, query});


  if (isLoading) {
    return (
      <Box px={3}>
        {Array.from({length: 10}).map((_, index) => (
          <SkeletonCard key={index}/>
        ))}
      </Box>
    );
  } else if (!articles?.length) {
    return (<NoArticle/>);
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

const SkeletonCard: FC = () => {
  return (
    <Card sx={{display: 'flex', mb: 2, height: 162, borderRadius: 2}}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-start',
        height: "100%",
        textDecoration: 'none',
        p: 2,
      }}>
        <Skeleton variant="text" width="20%" height={20} sx={{mb: 2}}/>
        <Skeleton variant="rectangular" width="100%" height={80}/>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        mx: 2,
        width: 135,
        height: "100%",
        flexShrink: 0
      }}>
        <Skeleton variant="rectangular" width="100%" height="80%"/>
      </Box>
    </Card>
  );
};

const NoArticle: FC = () => {
  const {t} = useTranslation()

  return (<Grid container width="100%" height="100%" alignItems='center' justifyContent='center' flexDirection="column">
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
  </Grid>)
}
