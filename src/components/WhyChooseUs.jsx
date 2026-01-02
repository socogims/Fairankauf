import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import GppGoodIcon from "@mui/icons-material/GppGood";

export default function VorteileWarumWir() {
  const items = [
    {
      title: "100 % kostenlose Fahrzeugbewertung",
      desc: "Erhalten Sie schnell ein faires Angebot für Ihr Auto in NRW – kostenlos, unverbindlich und transparent.",
      img: "/autoankauf-nrw-kostenlose-fahrzeugbewertung.jpg",
      icon: <ReceiptLongIcon />,
    },
    {
      title: "Kostenlose Abholung vor Ort",
      desc: "Wir holen Ihr Fahrzeug direkt bei Ihnen in NRW ab – auch bei Unfallwagen, Motorschaden oder ohne TÜV.",
      img: "/autoankauf-nrw-kostenlose-abholung.jpg",
      icon: <LocalShippingIcon />,
    },
    {
      title: "Sichere & sofortige Bezahlung",
      desc: "Verkaufen Sie Ihr Auto sicher und erhalten Sie sofortige Bezahlung per Sofortüberweisung, Barzahlung oder zertifiziertem Scheck.",
      img: "/autoankauf-nrw-sichere-bezahlung.jpg",
      icon: <SecurityIcon />,
    },
    {
    title: "Abmeldung inklusive",
    desc: "Auf Wunsch übernehmen wir die komplette Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle in NRW.",
    img: "/autoankauf-nrw-fahrzeug-abmeldung.jpg",
    icon: <GppGoodIcon />,
  },
  ];

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
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
     <Typography
  variant="h2"
  component="h2"
  sx={{
    color: "#fff",
    fontWeight: 800,
    fontSize: { xs: "2.2rem", md: "2.8rem" },
  }}
>
  Warum Sie Ihr Auto in NRW bei{" "}
  <Box component="span" sx={{ color: "#ff6a21" }}>
    fairankauf.de
  </Box>{" "}
  verkaufen sollten
</Typography>


          <Typography
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.05rem",
            }}
          >
            Wir kaufen Ihr Auto in NRW an – schnell, sicher und zum fairen Preis.“
           
          </Typography>
        </Box>

        {/* Cards */}
   <Grid container spacing={2} justifyContent="center">
  {items.map((item, i) => (
<Grid
  key={i}
  item
  xs={12}   // Mobile
  sm={6}    // Tablet / kleine Laptops → 2
  lg={3}    // Desktop → 4 nebeneinander
  display="flex"
  justifyContent="center"
>


      <Box
        sx={{
          bgcolor: "rgba(255,255,255,0.04)",
          borderRadius: "26px",
          overflow: "hidden",
          width: "100%",
          maxWidth: 350,
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 18px 50px rgba(255,106,33,0.35)",
          },
        }}
      >
        {/* Bild + Titel Overlay */}
        <Box sx={{ position: "relative" }}>
         <Box
          component="img"
          src={item.img}
          alt={`Vorteil beim Autoankauf in NRW: ${item.title}`}
          title={`${item.title} – Autoankauf NRW`}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: 230,
            objectFit: "cover",
          }}
        />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "#ff6a21",
              py: 1.6,
              px: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.05rem",
                textAlign: "center",
              }}
            >
              {item.title} in NRW
            </Typography>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              mx: "auto",
              mb: 2,
              borderRadius: "50%",
              bgcolor: "rgba(255,106,33,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ff6a21",
              fontSize: 28,
            }}
          >
            {item.icon}
          </Box>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            {item.desc} Wir kaufen Ihr Auto direkt an – egal ob Gebrauchtwagen, Unfallwagen oder Auto mit Motorschaden.
          </Typography>
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>

      </Container>
    </Box>
  );
}
