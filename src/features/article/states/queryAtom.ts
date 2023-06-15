import {atomWithStorage} from "jotai/utils";

export const queryAtom = atomWithStorage<string>("query", "")
