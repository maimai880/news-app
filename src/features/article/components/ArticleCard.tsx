import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import {FC} from "react";
import {useTranslation} from "@/features/language";
import {Article} from "@/features/article";

interface Props {
  article: Article
}

export const ArticleCard: FC<Props> = ({article}) => {
  const {t} = useTranslation()

  // TODO: 読み込み時スケルトンを表示
  return (
    <Card sx={{display: 'flex', mb: 2, height: 162, borderRadius: 2}}>
      <CardActionArea
        component="a" href={article.url} target="_blank" rel="noopener noreferrer"
        sx={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'flex-start',
          height: "100%",
          textDecoration: 'none',
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexGrow: 1,
            height: "100%",
            boxSizing: "border-box"
          }}
        >
          <CardMedia
            image={article.companyLogoUrl} alt={article.companyName}
            component="img"
            sx={{mb: 2, width: 'auto'}}
          />

          <Typography
            variant="h6" component="h3"
            gutterBottom sx={{lineHeight: 1.2, wordBreak: "break-all"}}
          >
            {article.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" mt="auto">
            {t("{投稿時間}前", {date: article.date})}
          </Typography>
        </CardContent>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 2,
          width: 120,
          height: "100%",
          flexShrink: 0,
        }}>
          <CardMedia
            image={article.imageUrl || ""} alt="サムネイル"
            component="img"
            sx={{
              width: 'auto',
              maxWidth: 120,
              maxHeight: '90%',
              borderRadius: 2,
            }}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};
