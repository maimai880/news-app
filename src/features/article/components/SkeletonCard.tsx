import {FC} from "react"
import {Box, Card, Skeleton} from "@mui/material"

export const SkeletonCard: FC = () => {
  return (
    <Card sx={{display: "flex", mb: 2, height: 162, borderRadius: 2}}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "flex-start",
        height: "100%",
        textDecoration: "none",
        p: 2,
      }}>
        <Skeleton variant="text" width="20%" height={20} sx={{mb: 2}}/>
        <Skeleton variant="rectangular" width="100%" height={80}/>
      </Box>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        mx: 2,
        width: 135,
        height: "100%",
        flexShrink: 0
      }}>
        <Skeleton variant="rectangular" width="100%" height="80%"/>
      </Box>
    </Card>
  )
}
