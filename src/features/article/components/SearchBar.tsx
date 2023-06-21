import {FC, useState} from "react"
import {Button, TextField} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import {useTranslation} from "@/features/language"
import {useSetAtom} from "jotai"
import {queryAtom} from "@/features/article"

export const SearchBar: FC = () => {
  const setQuery = useSetAtom(queryAtom)
  const [value, setValue] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery(value)
  }

  const {t} = useTranslation()

  return (
    <form
      onSubmit={handleSubmit}
      style={{display: "flex", flexDirection: "row", width: "100%"}}
      data-testid="SearchBar"
    >
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t("ニュースを検索")}
        size="small"
        sx={{width: "100%", maxWidth: 410, "& fieldset": {borderRadius: 0}}}
      />

      <Button type="submit" variant="contained" size="large" sx={{width: 90, borderRadius: 0}}>
        <SearchIcon/>
      </Button>
    </form>
  )
}
