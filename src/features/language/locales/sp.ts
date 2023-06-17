import {format, formatDistanceToNow} from "date-fns"
import {es as dateEs} from "date-fns/locale"

export const sp = {
  "ニュースを検索": "buscar noticias",
  "今日のニュース": "noticias del dia",
  "{今日}": () => format(new Date(), "EEEE, d \'de\' MMMM", {locale: dateEs}),
  "{投稿時間}前": (arg: { date: Date }) => formatDistanceToNow(arg.date, {addSuffix: true, locale: dateEs}),
  "一致する検索結果がありません": "No se han encontrado resultados de búsqueda coincidentes",
  "検索条件を変更して再度お試しください": "Cambie los criterios de búsqueda e inténtelo de nuevo."
} as const
