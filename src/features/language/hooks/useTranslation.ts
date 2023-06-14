import {useAtomValue} from "jotai";
import {languageAtom} from "@/features/language";
import {locales} from "@/features/language/locales";

export const useTranslation = () => {
  const language = useAtomValue(languageAtom)

  return {
    t: (key: keyof typeof locales["ja"], args?: object): string => {
      const value = locales[language][key]
      if (!value) throw new Error(`Key ${key} not found in ${language} locale`)

      return typeof value === "function" ? value(args) : value
    }
  }
}
