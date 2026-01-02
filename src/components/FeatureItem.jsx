import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import SearchIcon from "@mui/icons-material/Search";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";


function FeatureItem({ icon, title, desc }) {
  return (
    <Box sx={{ mb: 6, textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1.5,
          gap: 1.5,
          color: "#ff6a21",
        }}
      >
        {icon}
        <Typography sx={{ fontWeight: 700, color: "#fff" }}>
          {title}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "0.95rem",
          maxWidth: 420,
          mx: "auto",
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default function VorteileTimeline() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background:
          "radial-gradient(circle at top, #1c1d3a 0%, #0f1020 70%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Titel */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Welche Fahrzeuge {" "}
            <Box component="span" sx={{ color: "#ff6a21" }}>
              fairankauf.de
            </Box>{" "}
            in NRW ankauft
          </Typography>
        </Box>

       <Grid container spacing={4} alignItems="center" justifyContent="center">
  {/* LINKS */}
  <Grid item xs={12} md={5}>
    <FeatureItem
      icon={<DirectionsCarIcon />}
      title="Gebrauchtwagen verkaufen"
      desc="Wir kaufen Ihren Gebrauchtwagen in NRW schnell, sicher und zum fairen Marktpreis – unabhängig von Alter oder Laufleistung."
    />
    <FeatureItem
      icon={<CarCrashIcon />}
      title="Unfallwagen verkaufen"
      desc="Auch Unfallfahrzeuge kaufen wir in ganz NRW an – inklusive Abholung und sofortiger Bezahlung."
    />
    <FeatureItem
      icon={<ReportProblemIcon />}
      title="Auto ohne TÜV verkaufen"
      desc="Kein TÜV? Kein Problem. Wir kaufen Ihr Auto ohne gültige HU/AU in NRW unkompliziert an."
    />
  </Grid>

  {/* MITTE – Auto Bild */}
  <Grid item xs={12} md={2}>
    <Box
      sx={{
        position: "relative",
        height: { xs: 250, md: 420 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "2px",
          borderLeft: "2px dashed rgba(255,255,255,0.2)",
        }}
      />

      <Box
        component="img"
        src="/car-center.png"
        alt="Autoankauf NRW – wir kaufen Ihr Auto schnell und sicher an"
        sx={{
          width: { xs: 100, md: 150 },
          zIndex: 2,
        }}
      />
    </Box>
  </Grid>

  {/* RECHTS */}
  <Grid item xs={12} md={5}>
    <FeatureItem
      icon={<BuildIcon />}
      title="Auto mit Motorschaden verkaufen"
      desc="Motorschaden oder Getriebeschaden? Wir kaufen defekte Fahrzeuge in ganz NRW direkt an."
    />
    <FeatureItem
      icon={<BusinessIcon />}
      title="Firmenwagen verkaufen"
      desc="Firmenfahrzeuge, Leasingrückläufer oder Flottenfahrzeuge – wir bieten faire Ankaufspreise in NRW."
    />
    <FeatureItem
      icon={<PublicIcon />}
      title="Exportfahrzeuge"
      desc="Nicht mehr fahrbereit oder wirtschaftlich? Wir kaufen Fahrzeuge für den Export in NRW an."
    />
  </Grid>
</Grid>

      </Container>
    </Box>
  );
}
