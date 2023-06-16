import {ArticleCard} from "./ArticleCard";
import {FC} from "react";
import {Box} from "@mui/material";
import {useAtom} from "jotai";
import {countryAtom} from "@/features/language";
import {useArticles} from "@/features/article/api/getArticles.ts";
import {queryAtom} from "@/features/article";
import {SkeletonCard} from "@/features/article/components/SkeletonCard.tsx";
import {NoArticle} from "@/features/article/components/NoArticle.tsx";

export const ArticleList: FC = () => {
  const [country] = useAtom(countryAtom);
  const [query] = useAtom(queryAtom);
  const {data: articles, isLoading} = useArticles({country, query});

  if (!articles?.length) {
    return (<NoArticle/>);
  } else {
    return (
      <Box px={{xs: 1, lg: 3}}>
        {
          !isLoading
            ? articles.map((article) => (
              <ArticleCard article={article} key={article.url}/>
            ))
            : Array.from({length: 10}).map((_, index) => (
              <SkeletonCard key={index}/>
            ))
        }
      </Box>
    );
  }
};

