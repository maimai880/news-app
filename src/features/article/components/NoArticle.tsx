import {FC} from "react"
import {useTranslation} from "@/features/language"
import {Box, Typography} from "@mui/material"

export const NoArticle: FC = () => {
  const {t} = useTranslation()

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      alignItems: "center"
    }}>
      <img
        src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
        style={{width: "100%", maxWidth: "418px"}}
        alt="Empty Tree"
      />

      <Box px={1}>
        <Typography variant="h5" component="h3" color="text.secondary" fontWeight="bold" textAlign="center">
          {t("一致する検索結果がありません")}
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {t("検索条件を変更して再度お試しください")}
        </Typography>
      </Box>
    </Box>
  )
}
