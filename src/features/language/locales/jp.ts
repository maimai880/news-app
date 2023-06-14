import {format, formatDistanceToNow} from "date-fns";
import {ja} from "date-fns/locale";

export const jp = {
  "ニュースを検索": "ニュースを検索",
  "今日のニュース": "今日のニュース",
  "{今日}": () => format(new Date(), "M月d日E曜日", {locale: ja}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: ja})
} as const
