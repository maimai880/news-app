import {format, formatDistanceToNow} from "date-fns";
import {es as dateEs} from "date-fns/locale";

export const es = {
  "ニュースを検索": "buscar noticias",
  "今日のニュース": "noticias del dia",
  "{今日}": () => format(new Date(), "EEEE, d \'de\' MMMM", {locale: dateEs}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateEs})
} as const
