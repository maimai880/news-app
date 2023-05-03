import {FC} from "react";
import {Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useTranslation} from "@/features/language";

export const SearchBar: FC = () => {
  const {t} = useTranslation()

  return (<>
      <TextField
        placeholder={t("ニュースを検索")}
        size="small"
        sx={{width: 410, "& fieldset": {borderRadius: 0}}}
      />

      <Button variant="contained" size="large" sx={{width: 90, borderRadius: 0}}>
        <SearchIcon/>
      </Button>
    </>
  );
};
