export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }[];
}

export const isNewsApiResponse = (data: any): data is NewsApiResponse => (
  typeof data.status === 'string' &&
  typeof data.totalResults === 'number' &&
  Array.isArray(data.articles) &&
  data.articles.every(
    (article: any) =>
      typeof article.title === 'string' &&
      typeof article.url === 'string' &&
      (article.urlToImage === null || typeof article.urlToImage === 'string') &&
      typeof article.source.name === 'string' &&
      typeof article.publishedAt === 'string'
  )
);
