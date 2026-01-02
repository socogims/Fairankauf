import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function AGBSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0f1020 0%, #14162e 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            Allgemeine Geschäftsbedingungen (AGB)
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
            Transparent & fair – unsere AGB für den Autoankauf.
          </Typography>
        </Box>

        <List sx={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7 }}>
          <ListItem>
            <ListItemText primary="1. Vertragsgegenstand: Wir kaufen Ihr Fahrzeug zum vereinbarten Preis an, inkl. kostenloser Abholung." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Zahlungsbedingungen: Auszahlung erfolgt sofort per Überweisung oder Barzahlung bei Übergabe." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Haftung: Wir übernehmen keine Schäden, die nach Übergabe entstehen. Fahrzeuge werden wie besichtigt gekauft." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Datenschutz: Alle Fahrzeug- und Personendaten werden gemäß unserer Datenschutzerklärung behandelt." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Export & Weiterverwertung: Fahrzeuge können weiterverkauft, exportiert oder recycelt werden." />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
