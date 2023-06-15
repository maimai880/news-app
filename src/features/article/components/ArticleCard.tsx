import {Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography} from '@mui/material';
import {FC, useState} from "react";
import {useTranslation} from "@/features/language";
import {Article} from "@/features/article";

interface Props {
  article: Article
}

export const ArticleCard: FC<Props> = ({article}) => {
  const {t} = useTranslation()

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
            src={article.companyLogo} alt={article.companyName}
            component="img"
            sx={{mb: 1.5, width: 'auto', height: 25}}
          />

          <Typography
            variant="h6" component="h3"
            gutterBottom sx={{
            display: '-webkit-box',
            pl: 0.5,
            lineHeight: 1.2,
            wordBreak: "break-all",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
          >
            {article.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" mt="auto">
            {t("{投稿時間}前", {date: article.date})}
          </Typography>
        </CardContent>

        <Thumbnail url={article.imageUrl || ""}/>
      </CardActionArea>
    </Card>
  );
};

const Thumbnail: FC<{ url: string }> = ({url}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (<Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 2,
    width: 135,
    height: "100%",
    flexShrink: 0,
  }}>
    <CardMedia
      image={url || ""}
      alt="サムネイル"
      component="img"
      sx={{
        display: imageLoaded ? "block" : "none",
        width: "auto",
        maxWidth: "100%",
        maxHeight: "90%",
        borderRadius: 2,
      }}
      onLoad={handleImageLoad}
    />
    {imageLoaded ? null : <CircularProgress sx={{color: "text.secondary"}}/>}
  </Box>)
}
