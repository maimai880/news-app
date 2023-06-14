import {format, formatDistanceToNow} from "date-fns";
import {it as dateIt} from "date-fns/locale";

export const it = {
  "ニュースを検索": "Ricerca notizie",
  "今日のニュース": "Le notizie di oggi",
  "{今日}": () => format(new Date(), "EEEE d MMMM", {locale: dateIt}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateIt})
} as const
