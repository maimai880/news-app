import {format, formatDistanceToNow} from "date-fns";
import {fr as dateFr} from "date-fns/locale";

export const fr = {
  "ニュースを検索": "Recherche de nouvelles",
  "今日のニュース": "Nouvelles du jour",
  "{今日}": () => format(new Date(), "EEEE d MMMM", {locale: dateFr}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateFr}),
  "一致する検索結果がありません": "Aucun résultat de recherche correspondant n'a été trouvé",
  "検索条件を変更して再度お試しください": "Veuillez modifier vos critères de recherche et réessayer",
} as const
