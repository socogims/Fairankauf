import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function StadtteileDortmund() {
  const stadtteile = [
    "Innenstadt",
    "Hörde",
    "Aplerbeck",
    "Hombruch",
    "Eving",
    "Mengede",
    "Scharnhorst",
    "Huckarde",
    "Lütgendortmund",
    "Brackel",
    "Wambel",
    "Kirchhörde",
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: "#0f1020",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: "2.1rem", md: "2.6rem" },
              mb: 2,
            }}
          >
            Autoankauf in allen{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Stadtteilen Dortmunds
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.05rem",
              maxWidth: 820,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Wir sind Ihr zuverlässiger Ansprechpartner für den{" "}
            <strong>Autoankauf in Dortmund</strong> – egal in welchem Stadtteil
            Sie wohnen. Unser Service ist für Sie{" "}
            <strong>100 % kostenlos</strong>, inklusive Abholung und sofortiger
            Auszahlung.
          </Typography>
        </Box>

        {/* Stadtteile Grid */}
        <Grid container spacing={2} justifyContent="center">
          {stadtteile.map((stadtteil, index) => (
            <Grid item key={index}>
              <Chip
                icon={<LocationOnIcon />}
                label={`Autoankauf ${stadtteil}`}
                clickable
                component="a"
                href={`/autoankauf-dortmund-${stadtteil
                  .toLowerCase()
                  .replace("ü", "ue")
                  .replace("ö", "oe")
                  .replace("ä", "ae")
                  .replace(" ", "-")}`}
                sx={{
                  px: 2,
                  py: 2.4,
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderRadius: 999,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "#fff",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(255,106,33,0.45)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* SEO-Text */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.95rem",
              maxWidth: 900,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Ob Sie Ihr Auto in der Dortmunder Innenstadt, in Hörde, Hombruch,
            Aplerbeck oder einem anderen Stadtteil verkaufen möchten – wir
            kommen direkt zu Ihnen. Unser{" "}
            <strong>Autoankauf in Dortmund</strong> richtet sich an Privatkunden
            und Firmenkunden und umfasst Gebrauchtwagen, Unfallwagen, Fahrzeuge
            ohne TÜV sowie Autos mit Motorschaden.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
