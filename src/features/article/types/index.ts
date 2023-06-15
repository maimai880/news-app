export interface Article {
  title: string;
  url: string;
  imageUrl: string | null;
  companyName: string;
  companyLogoUrl: string;
  date: Date;
}

export interface Article {
  title: string;
  url: string;
  imageUrl: string | null;
  companyName: string;
  companyLogoUrl: string;
  date: Date;
}

export interface GNewsResponse {
  "totalArticles": number,
  "articles": [
    {
      "title": string,
      "url": string,
      "publishedAt": string,
      "content": string | null,
      "description": string | null,
      "image": string | null,
      "author": string | null
      "source": {
        "name": string,
        "url": string
      },
    }
  ]
}


export const isGNewsResponse = (data: any): data is GNewsResponse => data.totalArticles >= 0
