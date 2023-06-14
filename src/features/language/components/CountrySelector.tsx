import {FC, MouseEvent, useRef, useState} from 'react'
import {Box, Menu, MenuItem, SxProps} from '@mui/material'
import {useAtom} from "jotai";
import {countryAtom} from "@/features/language/states/countryAtom.ts";
import {Country} from "@/features/language";
import {SelectorButton} from "@/features/language/components/SelectorButton";

interface Props {
  sx?: SxProps
}

export const CountrySelector: FC<Props> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuWidth(event.currentTarget.clientWidth || 0);
  };
  const handleClose = () => setAnchorEl(null);

  const [country, setCountry] = useAtom(countryAtom)
  const handleItemClick = (lng: Country) => {
    setCountry(lng)
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
        <MenuItem selected={country === "jp"} onClick={() => handleItemClick("jp")}>日本</MenuItem>
        <MenuItem selected={country === "us"} onClick={() => handleItemClick("us")}>USA</MenuItem>
        <MenuItem selected={country === "fr"} onClick={() => handleItemClick("fr")}>France</MenuItem>
        <MenuItem selected={country === "de"} onClick={() => handleItemClick("de")}>Deutschland</MenuItem>
        <MenuItem selected={country === "it"} onClick={() => handleItemClick("it")}>Italia</MenuItem>
      </Menu>
    </Box>
  );
};
