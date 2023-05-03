import {format, formatDistanceToNow} from "date-fns";
import {enUS} from "date-fns/locale";

export const en = {
  "ニュースを検索": "Search News",
  "今日のニュース": "Today's News",
  "{今日}": () => format(new Date(), "EEEE, d MMMM", {locale: enUS}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: enUS})
} as const
