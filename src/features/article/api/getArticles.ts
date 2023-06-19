import {axios} from "@/lib/axios.ts"
import {Article, isGNewsResponse} from "@/features/article"
import {getLogo} from "@/features/article/utils/getLogo.ts"

export const getArticles = async (
  country: string,
  query: string
): Promise<Article[]> => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL || "https://gnews.io/api/v4/top-headlines", {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        country,
        q: query,
      }
    }
  ).catch((reason) => {
    throw new Error(`Failed to fetch articles: ${JSON.stringify(reason)}`)
  })

  if (!isGNewsResponse(response)) {
    throw new Error(`Invalid response data from GNews API: ${JSON.stringify(response)}`)
  }

  return Promise.all(response.articles.map(async (article) => ({
    title: article.title,
    url: article.url,
    imageUrl: article.image,
    companyName: article.source.name,
    companyLogo: await getLogo(article.source.url),
    date: new Date(article.publishedAt),
  })))
}
