import {useQuery} from 'react-query';
import {ExtractFnReturnType, QueryConfig} from '@/lib/react-query.ts';
import {Country} from '@/features/language';
import {axios} from '@/lib/axios.ts';
import {Article, isGNewsResponse} from '@/features/article';

export const getArticles = async (
  country: string,
  query: string
): Promise<Article[]> => {
  const response = await axios.get(
    "https://gnews.io/api/v4/top-headlines" +
    `?apikey=${import.meta.env.VITE_API_KEY}` +
    (query ? `&q=${encodeURI(query)}` : "") +
    `&country=${country}`
  );

  if (!isGNewsResponse(response)) {
    throw new Error(`Invalid response data from GNews API: ${JSON.stringify(response)}`);
  }

  // TODO: ロゴを取得
  return response.articles.map((article) => ({
    title: article.title,
    url: article.url,
    imageUrl: article.image,
    companyName: article.source.name,
    companyLogoUrl: '', // GNews API does not provide a company logo URL
    date: new Date(article.publishedAt),
  }));
};

type QueryFnType = typeof getArticles;

type UseNewsOptions = {
  country: Country;
  query: string;
  config?: QueryConfig<QueryFnType>;
};

export const useArticles = ({country, query, config}: UseNewsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['news', country, query],
    queryFn: () => getArticles(country, query),
    enabled: !!country,
  });
};
