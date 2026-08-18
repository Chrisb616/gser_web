import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Visuals() {
  return (
    <Container maxWidth="md" sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Visuals & Maps
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }} color="secondary">
        Coming Soon!
      </Typography>
    </Container>
  );
}
