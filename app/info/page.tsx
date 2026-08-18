import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Info() {
  return (
    <Container maxWidth="md" sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Info
      </Typography>
      <Typography variant="body1">
        Contact us at gserpod@gmail.com
      </Typography>
    </Container>
  );
}
