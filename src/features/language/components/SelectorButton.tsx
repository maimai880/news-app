import {FC, MouseEvent} from "react";
import {Button} from "@mui/material";
import {ArrowDropDown, Language as LanguageIcon} from "@mui/icons-material";

interface Props {
  ref: React.RefObject<HTMLButtonElement>
  onClick: (event: MouseEvent<HTMLElement>) => void
  open: boolean
}

export const SelectorButton: FC<Props> = (props) => {
  return (
    <Button
      ref={props.ref}
      onClick={props.onClick}
      variant="outlined"
      color="info"
      startIcon={<LanguageIcon/>}
      endIcon={
        <ArrowDropDown
          fontSize="small"
          sx={{
            transition: (theme) => `transform ${theme.transitions.duration.enteringScreen}ms`,
            transform: props.open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      }
      aria-controls={props.open ? 'language-select-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={props.open ? 'true' : undefined}
      disableElevation
    >
      Language
    </Button>
  )
}
