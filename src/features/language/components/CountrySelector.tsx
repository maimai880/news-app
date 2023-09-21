import {FC, MouseEvent, useEffect, useRef, useState} from "react"
import {Menu, MenuItem} from "@mui/material"
import {useAtom} from "jotai"
import {Country, countryAtom} from "@/features/language"
import {SelectorButton} from "@/features/language/components/SelectorButton"

interface Props {
  miniButton?: boolean
}

export const CountrySelector: FC<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  const [country, setCountry] = useAtom(countryAtom)
  const handleItemClick = (lng: Country) => {
    setCountry(lng)
    handleClose()
  }

  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)
  useEffect(() => {
    setMenuWidth(buttonRef.current?.clientWidth || 0)
  }, [props.miniButton])

  return (
    <>
      <SelectorButton buttonRef={buttonRef} onClick={handleClick} open={open} miniButton={props.miniButton}/>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{sx: {width: menuWidth}}}
      >
        {menuItems.map((item) => (
          <Item
            key={item.country}
            country={item.country}
            label={item.label}
            currentCountry={country}
            miniButton={!!props.miniButton}
            handleClick={handleItemClick}
          />
        ))}
      </Menu>
    </>
  )
}

const menuItems: Array<{country: Country, label: string}> = [
  {country: "jp", label: "日本"},
  {country: "us", label: "USA"},
  {country: "fr", label: "France"},
  {country: "sp", label: "España"},
  {country: "it", label: "Italia"},
]

interface ItemProps {
  country: Country
  label: string
  currentCountry: Country
  miniButton: boolean
  handleClick: (lng: Country) => void
}

const Item: FC<ItemProps> = (props) => {
  return (
    <MenuItem
      selected={props.country === props.currentCountry}
      onClick={() => props.handleClick(props.country)}
      sx={{
        p: props.miniButton ? 0.7 : 1,
        fontSize: props.miniButton ? ".8rem" : "1rem"
    }}
    >
      {props.label}
    </MenuItem>
  )
}



