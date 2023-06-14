import {ArticleCard} from './ArticleCard';
import {FC} from 'react';
import {Box} from '@mui/material';
import {useAtom} from 'jotai';
import {countryAtom} from "@/features/language";
import {useNews} from "@/features/article/api/getArticles.ts";

export const ArticleList: FC = () => {
  const [language] = useAtom(countryAtom);
  const {data: articles, isLoading, isError} = useNews({country: language});

  // TODO: 見た目整える
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !articles) {
    return <div>Error fetching articles</div>;
  }

  return (
    <Box px={3}>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.url}/>
      ))}
    </Box>
  );
};
