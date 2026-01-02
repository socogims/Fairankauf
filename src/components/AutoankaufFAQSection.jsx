import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqGroups = [
  {
    title: "Auto verkaufen – Ablauf & Bezahlung",
    items: [
      {
        q: "Wie funktioniert der Autoankauf bei fairankauf.de?",
        a: "Der Autoankauf bei fairankauf.de ist einfach, sicher und transparent. Sie geben Ihre Fahrzeugdaten online ein, erhalten eine kostenlose Bewertung und ein faires Angebot. Nach Annahme holen wir Ihr Auto kostenlos ab und zahlen den Kaufpreis sofort aus.",
      },
      {
        q: "Wie kann ich mein Auto schnell verkaufen?",
        a: "Wenn Sie Ihr Auto schnell verkaufen möchten, ist ein professioneller Autoankauf die beste Lösung. Kein Inserieren, keine Verhandlungen und kein Risiko – oft ist der Verkauf innerhalb von 24 Stunden abgeschlossen.",
      },
      {
        q: "Was ist mein Auto aktuell wert?",
        a: "Der Wert Ihres Autos hängt von Marke, Modell, Baujahr, Kilometerstand, Zustand und Marktnachfrage ab. Bei fairankauf.de erhalten Sie eine realistische Marktpreiseinschätzung – kostenlos und unverbindlich.",
      },
      {
        q: "Wie schnell erhalte ich mein Geld?",
        a: "Die Auszahlung erfolgt sofort bei Fahrzeugübergabe – per Sofortüberweisung oder auf Wunsch bar.",
      },
      {
        q: "Welche Unterlagen benötige ich für den Autoverkauf?",
        a: "In der Regel benötigen Sie Fahrzeugschein, Fahrzeugbrief und einen gültigen Ausweis. Sollten Unterlagen fehlen, finden wir meist eine Lösung.",
      },
    ],
  },
  {
    title: "Fahrzeugzustand & Sonderfälle",
    items: [
      {
        q: "Kaufen Sie auch Unfallwagen?",
        a: "Ja, wir kaufen Unfallwagen jeder Art – auch mit schweren Schäden oder Totalschaden. Nicht fahrbereite Fahrzeuge holen wir kostenlos ab.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV verkaufen?",
        a: "Ja, Autos ohne TÜV oder mit abgelaufener HU kaufen wir problemlos an. Diese Fahrzeuge eignen sich ideal für Export oder Weiterverwertung.",
      },
      {
        q: "Kaufen Sie alte Autos mit hoher Laufleistung?",
        a: "Ja. Auch Fahrzeuge mit sehr hoher Kilometerleistung oder hohem Alter können Sie bei uns verkaufen – oft zu besseren Preisen als beim Privatverkauf.",
      },
      {
        q: "Kaufen Sie alle Automarken an?",
        a: "Ja. Wir kaufen alle Automarken und Modelle – vom Kleinwagen über SUVs bis hin zu Premiumfahrzeugen.",
      },
      {
        q: "Kaufen Sie auch Firmenwagen oder Leasingfahrzeuge?",
        a: "Ja. Wir kaufen Firmenfahrzeuge, Leasingrückläufer und Flottenfahrzeuge zu fairen Marktpreisen an.",
      },
    ],
  },
  {
    title: "Autoexport & Umwelt",
    items: [
      {
        q: "Was passiert mit meinem Auto nach dem Verkauf?",
        a: "Je nach Zustand wird Ihr Auto weiterverkauft, exportiert, als Ersatzteilspender genutzt oder fachgerecht recycelt.",
      },
      {
        q: "Was bedeutet Autoexport?",
        a: "Beim Autoexport werden Fahrzeuge in Länder gebracht, in denen sie weiter genutzt oder repariert werden. Das ist wirtschaftlich sinnvoll und ressourcenschonend.",
      },
      {
        q: "Ist Autoexport legal?",
        a: "Ja. Unser Autoexport erfolgt vollständig legal, dokumentiert und gesetzeskonform. Für Sie entstehen keinerlei Risiken.",
      },
      {
        q: "Warum ist Autoexport gut für die Umwelt?",
        a: "Autoexport reduziert Verschrottung, spart Rohstoffe und verlängert den Lebenszyklus eines Fahrzeugs – ein wichtiger Beitrag zur nachhaltigen Kreislaufwirtschaft.",
      },
      {
        q: "Warum erhalte ich durch Autoexport oft einen besseren Preis?",
        a: "Viele Fahrzeuge – z. B. Diesel, Unfallwagen oder Autos ohne TÜV – sind im Ausland stärker nachgefragt. Dadurch können wir oft höhere Ankaufspreise anbieten.",
      },
    ],
  },
  {
    title: "Sicherheit & Vertrauen",
    items: [
      {
        q: "Ist der Händlerankauf sicherer als der Privatverkauf?",
        a: "Ja. Beim Händlerankauf tragen Sie kein Gewährleistungsrisiko, vermeiden Betrug und sparen Zeit. Der Verkauf erfolgt rechtssicher mit Kaufvertrag.",
      },
      {
        q: "Warum fairankauf.de?",
        a: "Wir stehen für faire Preise, schnelle Abwicklung, nachhaltigen Autoankauf, legalen Export und persönliche Beratung – deutschlandweit.",
      },
    ],
  },
];

export default function AutoankaufFAQSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #14162e 0%, #0f1020 100%)",
      }}
    >
      <Container maxWidth="md">
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 900, color: "#fff", mb: 2 }}
          >
            Häufige Fragen zum{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Autoankauf
            </Box>
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
            Expertenwissen rund um Auto verkaufen, Autoexport, Umwelt &
            Sicherheit.
          </Typography>
        </Box>

        {/* FAQ GROUPS */}
        {faqGroups.map((group, gi) => (
          <Box key={gi} sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                textAlign: "center",
                color: "primary.main",
                fontWeight: 800,
                mb: 4,
              }}
            >
              {group.title}
            </Typography>

            {group.items.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  borderRadius: 2,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: "primary.main" }} />
                  }
                >
                  <Typography component="h4" sx={{ fontWeight: 600 }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
