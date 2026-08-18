import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { withBasePath } from "@/lib/basePath";

export type Player = {
  id: string;
  name: string;
  desc: string;
  image: string;
  instagram: string;
};

export default function PlayersCard({ player }: { player: Player }) {
  return (
    <Card
      id={player.id}
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        height: { xs: 200, md: 320 },
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          minWidth: 0,
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h6" component="h2" gutterBottom>
            {player.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {player.desc}
          </Typography>
        </Box>
        <Link
          href={`https://instagram.com/${player.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          aria-label={`${player.name} on Instagram`}
          sx={{
            mt: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: "text.primary",
            width: "fit-content",
          }}
        >
          <Box
            component="img"
            src={withBasePath("/resources/images/instagram.png")}
            alt=""
            sx={{ width: 18, height: 18, display: "block" }}
          />
          <Typography variant="body2" component="span" sx={{ fontWeight: 700 }}>
            @{player.instagram}
          </Typography>
        </Link>
      </CardContent>
      <Box
        component="img"
        src={withBasePath(player.image)}
        alt={player.name}
        sx={{
          height: "calc(100% - 16px)",
          width: "auto",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          flexShrink: 0,
          my: 1,
          mr: 1,
          borderRadius: 1,
        }}
      />
    </Card>
  );
}
