import {format, formatDistanceToNow} from "date-fns"
import {enUS} from "date-fns/locale"

export const us = {
  "ニュースを検索": "Search News",
  "今日のニュース": "Today's News",
  "{今日}": () => format(new Date(), "EEEE, d MMMM", {locale: enUS}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: enUS}),
  "一致する検索結果がありません": "No matches found",
  "検索条件を変更して再度お試しください": "Please change your search criteria and try again",
  "エラーが発生しました": "An error has occurred",
} as const
