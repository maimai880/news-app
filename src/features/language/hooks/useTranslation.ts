import {useAtomValue} from "jotai"
import {countryAtom} from "@/features/language"
import {locales} from "@/features/language/locales"
import {jp} from "@/features/language/locales/jp.ts"

export const useTranslation = () => {
  const language = useAtomValue(countryAtom)

  return {
    t: (key: keyof typeof jp, args?: object): string => {
      const value = locales[language][key]
      if (!value) throw new Error(`Key: ${key} not found in ${language} locale`)

      return typeof value === "function" ? value(args) : value
    }
  }
}
