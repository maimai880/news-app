import {format, formatDistanceToNow} from "date-fns"
import {ja} from "date-fns/locale"

export const jp = {
  "ニュースを検索": "ニュースを検索",
  "今日のニュース": "今日のニュース",
  "{今日}": () => format(new Date(), "M月d日E曜日", {locale: ja}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: ja}),
  "一致する検索結果がありません": "一致する検索結果がありません",
  "検索条件を変更して再度お試しください": "検索条件を変更して再度お試しください",
  "エラーが発生しました": "エラーが発生しました",
} as const
