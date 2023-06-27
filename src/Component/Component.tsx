import {useAtom} from "jotai"
import {testAtom} from "@/Component"

export const Component = () => {
  const [query] = useAtom(testAtom)

  return (<div>{query}</div>)
}
