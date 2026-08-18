import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Info() {
  return (
    <Container maxWidth="md" sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Info
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Contact us at{" "}
        <Link href="mailto:gserpod@gmail.com" underline="hover">
          gserpod@gmail.com
        </Link>
      </Typography>
    </Container>
  );
}
