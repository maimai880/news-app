import {Box, IconButton} from "@mui/material"
import {FC} from "react"
import {ArrowBack} from "@mui/icons-material"
import {SearchBar} from "@/features/article"

interface Props {
  handleBack: () => void
}

export const SearchHeader: FC<Props> = (props) => {
  return (
    <>
      <IconButton
        color="primary"
        onClick={props.handleBack}
        sx={{p: 0, mr: 2,}}
        aria-label="back"
      >
        <ArrowBack sx={{width: "auto", height: 35}}/>
      </IconButton>
      <Box sx={{width: "100%", mr: 2}}>
        <SearchBar/>
      </Box>
    </>
  )
}
