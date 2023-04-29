import {ArticleCard} from './ArticleCard';
import {FC} from "react";

const articles = [
  {
    title: '自衛隊ヘリ事故 早ければあすにも機体回収へ 民間作業船が準備sss',
    url: 'https://www3.nhk.or.jp/news/html/20230429/k10014053581000.html',
    imageUrl: 'https://lh3.googleusercontent.com/proxy/WGaSq3VAXJVGlbgbEdTJLSu1BqMjs5Sy4RNSwrBjZWCqlLckevlVvDo4zO-GYOVn5qaACPd_pNDCK078dd32SzCCUahqGfBtlxQXGWztMcAohnGVjbcS4kqDUKzfne2cV9s2uzODFpPQ4GPB3HaoQX0=w64-h64-rw-dcGRCOEKkG',
    companyName: '企業1',
    companyLogoUrl: 'https://lh3.googleusercontent.com/proxy/99t3YLn2YsEocrsGhfIxGGJgrMeVEniNB1fpq-jW-lYrhrwcOPjtkSYp8kRnhYqRVoCC6LjAOqewPyBHQcZaSowumb6CPSOxSoQZpIFQQ0J0tDfktaED5NDI630drwlckraDKKs7qZD465e6wflhXvV_j9ZTAg-89zbYSiSn7tHiEW2W8WOdzG358pgy=h12-rw',
    date: new Date(),
  },
];

export const ArticleList: FC = () => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          article={article}
          key={article.url}
        />
      ))}
    </>
  );
};

