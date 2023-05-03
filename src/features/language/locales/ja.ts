import {format, formatDistanceToNow} from "date-fns";
import {ja as dateJa} from "date-fns/locale";

export const ja = {
  "ニュースを検索": "ニュースを検索",
  "今日のニュース": "今日のニュース",
  "{今日}": () => format(new Date(), "M月d日E曜日", {locale: dateJa}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateJa})
} as const
