import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const cities = [
  { name: "Dortmund", url: "/autoankauf-dortmund" },
  { name: "Köln", url: "/autoankauf-dortmund" },
  { name: "Düsseldorf", url: "/autoankauf-dortmund" },
  { name: "Essen", url: "/autoankauf-dortmund" },
  { name: "Bochum", url: "/autoankauf-dortmund" },
  { name: "Bonn", url: "/autoankauf-dortmund" },
  { name: "Wuppertal", url: "/autoankauf-dortmund" },
  { name: "Bielefeld", url: "/autoankauf-dortmund" },
  { name: "Münster", url: "/autoankauf-dortmund" },
  { name: "Aachen", url: "/autoankauf-dortmund" },
];

export default function NRWLocationsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0f1020, #14162e)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* SECTION TITLE */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
         <Typography
  variant="h2"      // 🔥 gleiche Größe wie andere Sections
  component="h2"    // 🔥 SEO korrekt
  sx={{
    fontWeight: 900,
    fontSize: { xs: "2.2rem", md: "2.8rem" },
  }}
>
  Autoankauf in{" "}
  <Box component="span" sx={{ color: "primary.main" }}>
    Nordrhein-Westfalen
  </Box>
</Typography>


          <Typography
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 720,
              mx: "auto",
            }}
          >
            Egal in welcher Stadt Sie wohnen – wir kaufen Ihr Fahrzeug
            direkt bei Ihnen vor Ort in ganz NRW.
          </Typography>
        </Box>

        {/* SERVICE MESSAGE */}
        <Box
          sx={{
            mb: 6,
            p: 3.5,
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            textAlign: "center",
          }}
        >
          <DirectionsCarIcon
            sx={{
              fontSize: 42,
              color: "primary.main",
              mb: 1,
            }}
          />

          <Typography
            component="h3"
            sx={{ fontWeight: 800, fontSize: "1.2rem" }}
          >
            Mobiler Autoankauf – wir kommen zu Ihnen
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Kostenlose Fahrzeugbewertung & Abholung direkt bei Ihnen –
            in folgenden NRW-Städten, ohne versteckte Gebühren.
          </Typography>
        </Box>

        {/* CITIES (bewusst KEINE Headings) */}
       <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
  {cities.map((city) => (
    <Box
      key={city.name}
      component="a"
      href={city.url} // 👉 Hier wird die feste URL verwendet
      sx={{
        px: 2.5,
        py: 1.2,
        borderRadius: 2,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontWeight: 600,
        textDecoration: "none",
        color: "#fff",
        transition: "all 0.2s ease",
        "&:hover": {
          background: "rgba(255,106,33,0.15)",
          borderColor: "primary.main",
        },
      }}
    >
      <LocationOnIcon sx={{ fontSize: 18, color: "primary.main" }} />
      {city.name}
    </Box>
  ))}
</Stack>

      </Container>
    </Box>
  );
}
