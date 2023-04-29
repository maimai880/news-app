import {AppBar, Toolbar, Typography} from '@mui/material'
import {FC} from "react";
import {SearchBar} from "@/features/article";
import {LanguageSelector} from '@/features/language'

export const Header: FC = () => {
  return (
    <AppBar position="static" sx={{p: 2, bgcolor: "white"}}>
      <Toolbar sx={{justifyContent: "center"}}>
        <Typography
          variant="h1"
          color="primary.main" mr={5}
          sx={{
            fontFamily: "BlinkMacSystemFont,\"Segoe UI\"",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          NEWS<br/>APP
        </Typography>

        <SearchBar/>

        <LanguageSelector sx={{position: 'absolute', right: 20}}/>
      </Toolbar>
    </AppBar>
  );
};
