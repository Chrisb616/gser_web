import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Art() {
  return (
    <Container maxWidth="md" sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Fan Art
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Coming Soon!
      </Typography>
      <Typography variant="body1">
        Got some fan art that we can show off? Send it to gserpod@gmail.com along with your full name and we'll display it here soon! Include a social media handle where people can find your work, if you wish.
      </Typography>
    </Container>
  );
}
