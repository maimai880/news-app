import {atomWithStorage} from "jotai/utils"
import {Country} from "@/features/language"

export const countryAtom = atomWithStorage<Country>("country", "jp")
