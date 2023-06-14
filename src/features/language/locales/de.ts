import {format, formatDistanceToNow} from "date-fns";
import {de as dateDe} from "date-fns/locale";

export const de = {
  "ニュースを検索": "Nachrichten suchen",
  "今日のニュース": "Nachrichten des Tages",
  "{今日}": () => format(new Date(), "EEEE, d. MMMM", {locale: dateDe}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateDe}),
  "一致する検索結果がありません": "Keine passenden Suchergebnisse gefunden",
  "検索条件を変更して再度お試しください": "Bitte ändern Sie Ihre Suchkriterien und versuchen Sie es erneut"
} as const
