import { Box, Container, Typography } from "@mui/material";

export default function DatenschutzSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #14162e 0%, #0f1020 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ fontWeight: 900, mb: 6, textAlign: "center" }}
        >
          Datenschutz
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Der Schutz Ihrer persönlichen Daten ist uns bei Inter-Car besonders wichtig. 
          Wir verarbeiten alle Informationen gemäß den gesetzlichen Bestimmungen 
          (DSGVO) und ausschließlich zum Zweck der Abwicklung Ihres Autoankaufs.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Erhebung und Verwendung von Daten
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Wir speichern nur die Daten, die Sie uns freiwillig übermitteln – z. B. Name, E-Mail, Telefonnummer und Fahrzeugdaten (Marke, Modell, Baujahr, Zustand), 
          um Ihnen ein faires Angebot für Ihr Auto zu erstellen oder Termine für Abholung und Bewertung zu koordinieren.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Kontaktformular und E-Mail
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Die von Ihnen über das Kontaktformular übermittelten Daten werden ausschließlich zur Beantwortung Ihrer Anfrage genutzt. 
          Ihre Daten werden nicht an Dritte verkauft oder weitergegeben, außer für die notwendige Abwicklung des Fahrzeugankaufs.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Speicherung und Sicherheit
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Alle personenbezogenen Daten werden auf sicheren Servern in Deutschland gespeichert. 
          Wir setzen technische und organisatorische Maßnahmen ein, um unbefugten Zugriff, Verlust oder Missbrauch zu verhindern.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Ihre Rechte
        </Typography>
        <Typography>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten. 
          Zur Ausübung dieser Rechte können Sie uns unter contact@inter-car.fr kontaktieren.
        </Typography>
      </Container>
    </Box>
  );
}
