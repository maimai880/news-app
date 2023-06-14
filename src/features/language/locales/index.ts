import {jp} from './jp.ts'
import {us} from "./us.ts";
import {fr} from "./fr";
import {de} from "./de";
import {it} from "./it";
import {Country} from "@/features/language";

export const locales: { [k in Country]: { [l: string]: string | Function } } = {
  jp,
  us,
  fr,
  de,
  it,
}
