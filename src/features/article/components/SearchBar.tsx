import {FC} from "react";
import {Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar: FC = () => {
  return (<>
      <TextField
        placeholder="Search news"
        size="small"
        sx={{width: 410, "& fieldset": {borderRadius: 0}}}
      />

      <Button variant="contained" size="large" sx={{width: 90, borderRadius: 0}}>
        <SearchIcon/>
      </Button>
    </>
  );
};
