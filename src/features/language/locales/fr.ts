import {format, formatDistanceToNow} from "date-fns";
import {fr as dateFr} from "date-fns/locale";

export const fr = {
  "ニュースを検索": "Recherche de nouvelles",
  "今日のニュース": "Nouvelles du jour",
  "{今日}": () => format(new Date(), "EEEE d MMMM", {locale: dateFr}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateFr})
} as const
