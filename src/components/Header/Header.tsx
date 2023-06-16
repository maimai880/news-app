import {AppBar, Box, Toolbar, Typography, useMediaQuery} from "@mui/material"
import {FC, useState} from "react";
import {SearchBar} from "@/features/article";
import {CountrySelector} from "@/features/language"
import {theme} from "@/theme.ts";
import SearchIcon from "@mui/icons-material/Search";
import {SearchHeader} from "@/components/Header/SearchHeader.tsx";

export const Header: FC = () => {
  const useMiniButton = useMediaQuery(() => theme.breakpoints.down("lg"))
  const isSmartPhone = useMediaQuery("(max-width:499px)")

  const [showSearchHeader, setShowSearchHeader] = useState(false);
  const handleSearch = () => {
    setShowSearchHeader(true);
  };
  const handleBack = () => {
    setShowSearchHeader(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        p: {xs: 0.5, lg: 2},
        width: "100%",
        height: {xs: 72, lg: 102},
        bgcolor: "white",
        overflow: "hidden",
      }}
    >
      {
        showSearchHeader ?
          <SearchHeader handleBack={handleBack}/> :
          <Toolbar sx={{position: "static", px: 0, width: "100%", maxWidth: {xs: 850, ms: 650}}}>
            <Typography
              variant="h1"
              color="primary.main"
              sx={{
                mr: !isSmartPhone ? {xs: 6, lg: 5} : "auto",
                ml: {xs: 1, sm: 0},
                fontSize: {xs: "21px", lg: "30px"},
                fontFamily: "BlinkMacSystemFont,\"Segoe UI\"",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              NEWS<br/>APP
            </Typography>

            {
              !isSmartPhone ?
                <Box sx={{mr: 3, width: "100%", maxWidth: 500}}>
                  <SearchBar/>
                </Box> :
                <SearchIcon color="primary" onClick={handleSearch} sx={{width: "auto", height: 40, mr: 2}}/>
            }

            <Box sx={{
              position: {xs: "static", sm: "absolute"},
              right: 30,
              ml: !isSmartPhone ? "auto" : 0,
              pr: {xs: 2.5, sm: "unset"}
            }}>
              <CountrySelector miniButton={useMiniButton}/>
            </Box>
          </Toolbar>
      }
    </AppBar>
  )
}
