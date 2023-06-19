import {Country} from "@/features/language"
import {ExtractFnReturnType, QueryConfig} from "@/lib/react-query.ts"
import {useQuery} from "react-query"
import {getArticles} from "./getArticles.ts"

type QueryFnType = typeof getArticles;

type UseArticlesOptions = {
  country: Country;
  query: string;
  config?: QueryConfig<QueryFnType>;
};

export const useArticles = ({country, query, config}: UseArticlesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["articles", country, query],
    queryFn: () => getArticles(country, query),
    enabled: !!country,
  })
}
