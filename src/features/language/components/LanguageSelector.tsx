import {FC, MouseEvent, useRef, useState} from 'react'
import {Box, Menu, MenuItem, SxProps} from '@mui/material'
import {useAtom} from "jotai";
import {languageAtom} from "@/features/language/states/languageAtom.ts";
import {Language} from "@/features/language";
import {SelectorButton} from "@/features/language/components/SelectorButton";

interface Props {
  sx?: SxProps
}

export const LanguageSelector: FC<Props> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuWidth(event.currentTarget.clientWidth || 0);
  };
  const handleClose = () => setAnchorEl(null);

  const [language, setLanguage] = useAtom(languageAtom)
  const changeLanguage = (lng: Language) => {
    setLanguage(lng)
    handleClose()
  }

  return (
    <Box sx={props.sx}>
      <SelectorButton ref={buttonRef} open={open} onClick={handleClick}/>

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

