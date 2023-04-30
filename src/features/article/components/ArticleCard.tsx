import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import {formatDistanceToNow} from 'date-fns';
import {FC} from "react";
import {ja} from "date-fns/locale";

interface Props {
  article: { title: string, url: string, imageUrl: string, companyName: string, companyLogoUrl: string, date: Date }
}

export const ArticleCard: FC<Props> = ({article}) => {
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
            {formatDistanceToNow(article.date, {addSuffix: true, locale: ja})}
          </Typography>
        </CardContent>

        <CardMedia
          image={article.imageUrl} alt={article.title}
          component="img"
          sx={{
            alignSelf: "center",
            mx: 2,
            width: 120,
            height: 'auto',
            maxHeight: '100%',
            objectFit: 'cover',
            flexShrink: 0,
            borderRadius: 2,
          }}
        />
      </CardActionArea>
    </Card>
  );
};
