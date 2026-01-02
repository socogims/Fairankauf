import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

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
            Welche Fahrzeuge{" "}
            <Box component="span" sx={{ color: "#ff6a21" }}>
              wir in Dortmund
            </Box>{" "}
            ankaufen
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* LINKS */}
          <Grid item xs={12} md={5}>
            <FeatureItem
              icon={<DirectionsCarIcon />}
              title="Gebrauchtwagen in Dortmund verkaufen"
              desc="Wir kaufen Ihren Gebrauchtwagen direkt in Dortmund – fair, schnell und unabhängig von Alter oder Laufleistung. Kostenlose Abholung in allen Stadtteilen."
            />
            <FeatureItem
              icon={<CarCrashIcon />}
              title="Unfallwagen in Dortmund verkaufen"
              desc="Unfallauto in Dortmund? Wir kaufen Fahrzeuge mit Unfallschäden aller Art inklusive Abholung und sofortiger Auszahlung."
            />
            <FeatureItem
              icon={<ReportProblemIcon />}
              title="Auto ohne TÜV in Dortmund verkaufen"
              desc="Kein TÜV oder abgelaufene HU/AU? Wir kaufen Ihr Auto ohne TÜV unkompliziert direkt in Dortmund an."
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
                alt="Autoankauf Dortmund – wir kaufen Ihr Auto direkt vor Ort"
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
              title="Auto mit Motorschaden in Dortmund"
              desc="Motorschaden oder Getriebeschaden? Wir kaufen defekte Fahrzeuge in Dortmund transparent und ohne versteckte Kosten."
            />
            <FeatureItem
              icon={<BusinessIcon />}
              title="Firmenwagen in Dortmund verkaufen"
              desc="Firmenfahrzeuge, Leasingrückläufer oder Fuhrparkautos kaufen wir direkt in Dortmund mit seriöser Abwicklung."
            />
            <FeatureItem
              icon={<PublicIcon />}
              title="Exportfahrzeuge aus Dortmund"
              desc="Nicht mehr fahrbereit oder wirtschaftlich? Wir kaufen Fahrzeuge aus Dortmund auch für den Export an."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
