import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Art() {
  return (
    <Container maxWidth="md" sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Fan Art
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }} color="secondary">
        Coming Soon!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Got some fan art that we can show off? Send it to{" "}
        <Link href="mailto:gserpod@gmail.com" underline="hover">
          gserpod@gmail.com
        </Link>{" "}
        along with your full name and we'll display it here soon! Include a social media handle where people can find your work, if you wish.
      </Typography>
    </Container>
  );
}
