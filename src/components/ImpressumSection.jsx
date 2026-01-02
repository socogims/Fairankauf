import { Box, Container, Typography } from "@mui/material";

export default function ImpressumSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0f1020 0%, #14162e 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ fontWeight: 900, mb: 6, textAlign: "center" }}
        >
          Impressum
        </Typography>

        <Typography sx={{ mb: 3, fontWeight: 600 }}>
          Inter-Car – Ihr Experte für Autoankauf und Gebrauchtwagen
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Inter-Car GmbH
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Telefon: +49 1625854142
        </Typography>
        <Typography sx={{ mb: 1 }}>
          E-Mail: contact@fairkauf.de
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Geschäftsführer: Ali Jabar
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Handelsregister & Steuern
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Handelsregister: 
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Umsatzsteuer-ID: 
        </Typography>

        <Typography sx={{ mt: 4 }}>
          <strong>Hinweis:</strong> Wir sind Ihr zuverlässiger Partner beim Autoankauf, 
          Gebrauchtwagen verkaufen, Unfallwagen Ankauf und Autoexport. 
          Unsere Dienstleistungen erfolgen transparent, schnell und zu fairen Preisen.
        </Typography>
      </Container>
    </Box>
  );
}
