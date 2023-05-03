import {atomWithStorage} from "jotai/utils";
import {Language} from "@/features/language";

export const languageAtom = atomWithStorage<Language>("language", "ja")
