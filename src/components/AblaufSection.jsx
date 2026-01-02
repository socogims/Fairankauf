import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PaymentsIcon from "@mui/icons-material/Payments";
import VerifiedIcon from "@mui/icons-material/Verified";

function StepCard({ number, icon, title, desc }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: 4,
        flexGrow: 1, // sorgt dafür, dass alle Cards gleich hoch sind
        borderRadius: 4,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all .25s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          background: "rgba(255,106,33,0.08)",
          borderColor: "#ff6a21",
        },
      }}
    >
      {/* Hintergrund Zahl */}
      <Typography
        sx={{
          position: "absolute",
          top: 12,
          right: 16,
          fontSize: "4rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      >
        {number}
      </Typography>

      {/* Icon */}
      <Box sx={{ color: "#ff6a21", mb: 2 }}>
        {icon}
      </Box>

      {/* Titel */}
      <Typography
        sx={{
          fontWeight: 700,
          color: "#fff",
          mb: 1,
          fontSize: "1.05rem",
        }}
      >
        {title}
      </Typography>

      {/* Text */}
      <Typography
        sx={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          mt: 1,
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default function AblaufCardsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(180deg, #0f1020 0%, #14162e 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Titel */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.6rem" },
            }}
          >
            Auto verkaufen mit{" "}
            <Box component="span" sx={{ color: "#ff6a21" }}>
              fairankauf.de
            </Box>{" "}
            – so einfach geht’s
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 760,
              mx: "auto",
            }}
          >
            In nur 5 klaren Schritten zum fairen Verkaufspreis
          </Typography>
        </Box>

        {/* Steps */}
        <Grid
          container
          spacing={4}
          alignItems="stretch"
        >
          {[
            {
              number: "01",
              icon: <AssignmentIcon />,
              title: "Angebot abgeben",
              desc: "Online oder telefonisch – kostenlos & unverbindlich.",
            },
            {
              number: "02",
              icon: <EventAvailableIcon />,
              title: "Termin vereinbaren",
              desc: "Kostenlose Fahrzeugprüfung – auf Wunsch direkt bei Ihnen.",
            },
            {
              number: "03",
              icon: <HandshakeIcon />,
              title: "Preis festlegen",
              desc: "Faire und transparente Verhandlung auf Augenhöhe.",
            },
            {
              number: "04",
              icon: <PaymentsIcon />,
              title: "Auszahlung",
              desc: "Sofortige Bezahlung nach Vertragsabschluss.",
            },
            {
              number: "05",
              icon: <VerifiedIcon />,
              title: "Abmeldung",
              desc: "Auf Wunsch übernehmen wir die Fahrzeugabmeldung.",
            },
          ].map((step) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4} // optional, falls du 5 Cards gleichmäßig verteilen willst
              key={step.number}
              sx={{ display: "flex" }}
            >
              <StepCard {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
