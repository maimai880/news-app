import {FC} from "react";
import {BottomNavigation, Typography} from "@mui/material";

export const Footer: FC = () => {
  return (
    <BottomNavigation component="footer" sx={{mt: "auto", minHeight: 55, bgcolor: "#ddd"}}>
      <Typography variant="body2" alignSelf="center" color="text.secondary">
        © 2023 maimai880 All rights reserved.
      </Typography>
    </BottomNavigation>
  );
};
