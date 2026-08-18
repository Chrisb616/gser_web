import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import players from "@/public/resources/players/players.json";
import PlayersDirectory from "./PlayersDirectory";

export default function Players() {
  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, textAlign: "center" }}
      >
        Players
      </Typography>
      <PlayersDirectory players={players} />
    </Container>
  );
}
