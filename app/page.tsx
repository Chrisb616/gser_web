import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        The Greatest Story Ever Rolled
      </Typography>
    </Container>
  );
}
