import {FC, MouseEvent, useEffect, useRef, useState} from 'react'
import {Box, Button, Menu, MenuItem, SxProps} from '@mui/material'
import {ArrowDropDown, Language as LanguageIcon} from '@mui/icons-material'
import {useAtom} from "jotai";
import {languageAtom} from "@/features/language/states/languageAtom.ts";
import {Language} from "@/features/language";

interface Props {
  sx?: SxProps
}

export const LanguageSelector: FC<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)
  useEffect(() => {
    setMenuWidth(buttonRef.current?.clientWidth || 0)
  }, [buttonRef.current?.clientWidth])

  const [language, setLanguage] = useAtom(languageAtom)
  const changeLanguage = (lng: Language) => {
    setLanguage(lng)
    handleClose()
  }

  return (
    <Box sx={props.sx}>
      {/*TODO: 別コンポーネントに分離*/}
      <Button
        ref={buttonRef}
        onClick={handleClick}
        variant="outlined"
        color="info"
        startIcon={<LanguageIcon/>}
        endIcon={
          <ArrowDropDown
            fontSize="small"
            sx={{
              transition: (theme) => `transform ${theme.transitions.duration.enteringScreen}ms`,
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        }
        aria-controls={open ? 'language-select-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
      >
        Language
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{sx: {width: menuWidth}}}
      >
        <MenuItem selected={language === "ja"} onClick={() => changeLanguage("ja")}>日本語</MenuItem>
        <MenuItem selected={language === "en"} onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem selected={language === "es"} onClick={() => changeLanguage("es")}>Español</MenuItem>
        <MenuItem selected={language === "de"} onClick={() => changeLanguage("de")}>Deutsch</MenuItem>
        <MenuItem selected={language === "fr"} onClick={() => changeLanguage("fr")}>Français</MenuItem>
      </Menu>
    </Box>
  );
};
