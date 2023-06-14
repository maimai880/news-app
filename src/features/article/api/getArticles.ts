import {useQuery} from 'react-query';
import {ExtractFnReturnType, QueryConfig} from "@/lib/react-query.ts";
import {Country} from "@/features/language";
import {axios} from "@/lib/axios.ts";
import {Article, isNewsApiResponse} from "@/features/article";


export const getArticles = async (
  language: string,
  query?: string
): Promise<Article[]> => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?apiKey=${import.meta.env.VITE_API_KEY}&country=${"jp"}${
      query ? `&q=${query}` : ''
    }`
  );
  console.log(response);

  if (!isNewsApiResponse(response)) {
    throw new Error(`Invalid response data from News API: ${JSON.stringify(response)}`);
  }

  return response.articles.map((article) => ({
    title: article.title,
    url: article.url,
    imageUrl: article.urlToImage,
    companyName: article.source.name,
    companyLogoUrl: '', // News API does not provide a company logo URL
    date: new Date(article.publishedAt),
  }));
};

type QueryFnType = typeof getArticles;

type UseNewsOptions = {
  language: Language;
  query?: string;
  config?: QueryConfig<QueryFnType>;
};

export const useNews = ({language, query, config}: UseNewsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['news', language, query],
    queryFn: () => getArticles(language, query),
    enabled: !!language
  });
};

