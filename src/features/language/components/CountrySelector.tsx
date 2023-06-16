import {FC, MouseEvent, useEffect, useRef, useState} from 'react'
import {Box, Menu, MenuItem, SxProps} from '@mui/material'
import {useAtom} from "jotai";
import {Country, countryAtom} from "@/features/language";
import {SelectorButton} from "@/features/language/components/SelectorButton";

interface Props {
  sx?: SxProps
}

export const CountrySelector: FC<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const [country, setCountry] = useAtom(countryAtom)
  const handleItemClick = (lng: Country) => {
    setCountry(lng)
    handleClose()
  }

  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)
  useEffect(() => {
    setMenuWidth(buttonRef.current?.clientWidth || 0);
  }, [buttonRef.current?.clientWidth])

  return (
    <Box sx={props.sx}>
      <SelectorButton buttonRef={buttonRef} open={open} onClick={handleClick}/>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{sx: {width: menuWidth}}}
      >
        <MenuItem selected={country === "jp"} onClick={() => handleItemClick("jp")}>日本</MenuItem>
        <MenuItem selected={country === "us"} onClick={() => handleItemClick("us")}>USA</MenuItem>
        <MenuItem selected={country === "fr"} onClick={() => handleItemClick("fr")}>France</MenuItem>
        <MenuItem selected={country === "sp"} onClick={() => handleItemClick("sp")}>España</MenuItem>
        <MenuItem selected={country === "it"} onClick={() => handleItemClick("it")}>Italia</MenuItem>
      </Menu>
    </Box>
  );
};

