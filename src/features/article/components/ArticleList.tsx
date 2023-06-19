import {ArticleCard} from "./ArticleCard"
import {FC} from "react"
import {Box} from "@mui/material"
import {useAtom} from "jotai"
import {countryAtom} from "@/features/language"
import {useArticles} from "@/features/article/api/useArticles.ts"
import {queryAtom} from "@/features/article"
import {SkeletonCard} from "@/features/article/components/SkeletonCard.tsx"
import {NoArticle} from "@/features/article/components/NoArticle.tsx"

export const ArticleList: FC = () => {
  const [country] = useAtom(countryAtom)
  const [query] = useAtom(queryAtom)
  const {data: articles, isLoading, isError} = useArticles({country, query})

  if (isError) throw new Error("Failed to load articles")

  if (articles?.length || isLoading) {
    return (
      <Box px={{xs: 1, lg: 3}}>
        {
          isLoading
            ? Array.from({length: 10}).map((_, index) => (
              <SkeletonCard key={index}/>
            ))
            : articles && articles.map((article) => (
            <ArticleCard article={article} key={article.url}/>
          ))
        }
      </Box>
    )
  } else {
    return (<NoArticle/>)
  }
}

