import {ja} from './ja'
import {en} from "./en";
import {es} from "./es";
import {de} from "./de";
import {fr} from "./fr";
import {Language} from "@/features/language";

export const locales: { [k in Language]: { [l: string]: string | Function } } = {
  ja,
  en,
  es,
  de,
  fr
}
