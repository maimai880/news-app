import {FC, MouseEvent, useEffect, useRef, useState} from 'react'
import {Box, Button, Menu, MenuItem, SxProps} from '@mui/material'
import {ArrowDropDown, Language} from '@mui/icons-material'

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

  return (
    <Box sx={props.sx}>
      <Button
        ref={buttonRef}
        onClick={handleClick}
        variant="outlined"
        color="info"
        startIcon={<Language/>}
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
        <MenuItem onClick={() => {
        }}>English</MenuItem>
        <MenuItem onClick={() => {
        }}>日本語</MenuItem>
        <MenuItem onClick={() => {
        }}>Español</MenuItem>
        <MenuItem onClick={() => {
        }}>Deutsch</MenuItem>
        <MenuItem onClick={() => {
        }}>Français</MenuItem>
      </Menu>
    </Box>
  );
};
