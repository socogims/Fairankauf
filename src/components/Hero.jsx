import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        background:
          "radial-gradient(circle at right top, #23245a 0%, #0f1020 65%)",
        pt: { xs: 9, md: 2 },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at left, rgba(255,106,33,0.18), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 4 }}
          alignItems="center"
        >
          {/* ================= LEFT ================= */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, pr: { md: 6 } }}>
            {/* H1 mit Hauptkeyword */}
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                lineHeight: 1.15,
                mb: 3,
                fontSize: { xs: "2.1rem", md: "3rem" },
              }}
            >
              Autoankauf in{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                NRW – Ihr Auto schnell & fair verkaufen
              </Box>
            </Typography>

            {/* Beschreibung mit Keyword "verkaufen" */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 4,
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                lineHeight: 1.75,
              }}
            >
              Verkaufen Sie Ihr Auto unkompliziert in Nordrhein-Westfalen – egal ob
              fahrbereit, defekt oder Unfallwagen. Wir garantieren einen{" "}
              <strong>schnellen und sicheren Autoankauf</strong> mit direkter Auszahlung,
              ohne Verpflichtungen und auch für Fahrzeuge, die nicht mehr fahrbereit sind.
              fairankauf - Ihr zuverlässiger Partner für den professionellen Autoankauf
            </Typography>

            {/* PRIMARY CTA */}
            <Button
              variant="contained"
              color="primary"
              href="/autobewertung-nrw&umgebung"
              sx={{
                width: "100%",
                py: { xs: 1.8, md: 2.6 },
                borderRadius: 999,
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: 800,
                textTransform: "none",
                boxShadow: {
                  xs: "0 8px 22px rgba(255,106,33,0.45)",
                  md: "0 14px 40px rgba(255,106,33,0.5)",
                },
                "&:hover": {
                  transform: { md: "translateY(-2px)" },
                  boxShadow: "0 20px 55px rgba(255,106,33,0.7)",
                },
              }}
            >
              Jetzt Auto bewerten & Angebot erhalten
            </Button>

            {/* WhatsApp CTA – nur Mobile */}
            <Button
              href="https://wa.me/491622982160"
              target="_blank"
              rel="noopener"
              startIcon={
                <Box component="span" sx={{ fontSize: 22, lineHeight: 1 }}>
                  💬
                </Box>
              }
              sx={{
                display: { xs: "flex", md: "flex" },
                mt: 2.2,
                width: "100%",
                py: 1.4,
                borderRadius: 999,
                fontSize: "0.95rem",
                fontWeight: 700,
                textTransform: "none",
                color: "#fff",
                background:
                  "linear-gradient(135deg, #25D366 0%, #1ebe5d 100%)",
                boxShadow: "0 8px 22px rgba(37,211,102,0.35)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1ebe5d 0%, #25D366 100%)",
                  boxShadow: "0 12px 30px rgba(37,211,102,0.55)",
                },
              }}
            >
              WhatsApp Kontakt
            </Button>

            <Typography
              sx={{
                mt: 3,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              ✔ Auto verakufen in NRW • ✔ Sofortige Auszahlung • ✔ Sicherer Autoankauf in NRW
            </Typography>

            {/* SECONDARY CTA */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ fontSize: "0.95rem" }}>
                Brauchen Sie Hilfe?
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.4)",
                  borderRadius: 999,
                  px: { xs: 2.2, md: 3 },
                  py: { xs: 0.8, md: 1 },
                  fontSize: { xs: "0.9rem", md: "0.95rem" },
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Einen Berater kontaktieren 📞
              </Button>
            </Box>
          </Box>

          {/* ================= RIGHT ================= */}
         <Box
  sx={{
    width: { xs: "100%", md: "50%" },
     height: { xs: 480, sm: 500, md: 700 },
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
  }}
>
  {/* Unsichtbarer H2 für SEO */}
  <Typography
    component="h2"
    sx={{ position: "absolute", top: -9999 }}
  >
    Auto ankaufen in NRW – fairankauf.de
  </Typography>

  {/* Glow */}
  <Box
    sx={{
      position: "absolute",
      right: "-15%",
      top: "20%",
      width: 360,
      height: 360,
      background:
        "radial-gradient(circle, rgba(255,106,33,0.25), transparent 70%)",
      filter: "blur(60px)",
      zIndex: -1,
    }}
  />

  <Box
    sx={{
      position: "relative",
      width: "100%",
      maxWidth: 650,
      transform: { md: "translateX(40px)" },
      borderRadius: 5,
      overflow: "hidden",
      boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
      transition: "transform 0.5s ease",
      "&:hover": {
        transform: { md: "translateX(40px) scale(1.02)" },
      },
    }}
  >
    {/* Hero Image */}
    <Box
      component="img"
      src="/autoankauf-nrw-angebot.jpg"
      alt="Auto ankaufen in NRW – fairankauf.de"
      sx={{ width: "100%", display: "block" }}
    />

    {/* Overlay */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15), rgba(0,0,0,0.65))",
      }}
    />

    {/* Texts */}
      <Box sx={{ position: "absolute", top: { xs: 16, md: 24 }, left: { xs: 16, md: 24 }, zIndex: 10 }}>
        <Typography
          sx={{
            fontWeight: 900,
            lineHeight: { xs: 1.2, md: 1 },
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.4rem" },
            textTransform: "uppercase",
            color: "#fff",
            maxWidth: { xs: "80%", md: "100%" }, // verhindert, dass Text über den Bildschirm läuft
            wordBreak: "break-word", // Zeilenumbruch bei sehr langen Wörtern
          }}
        >
          Auto verkaufen
          <br />
          in NRW
        </Typography>
      </Box>

    {/* Branding */}
    <Typography
      sx={{
        position: "absolute",
        top: 24,
        right: 24,
        fontWeight: 700,
        fontSize: "1.3rem",
      }}
    >
      <Box component="span" sx={{ color: "primary.main" }}>
        Fair
      </Box>
      <Box component="span" sx={{ color: "#fff" }}>
        ankauf.de
      </Box>
    </Typography>

    {/* CTA IM BILD – nur Desktop */}
    <Button
      component="a"
     href="/autobewertung-nrw&umgebung"
      variant="contained"
      color="primary"
      sx={{
        display: { xs: "inline-flex", md: "inline-flex" },
        position: "absolute",
        bottom: 24,
        right: 24,
        borderRadius: 3,
        px: 4,
        py: 1.7,
        fontWeight: 800,
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
      }}
    >
      Angebot sichern
    </Button>
  </Box>
</Box>

        </Stack>
      </Container>
    </Box>
  );
}
