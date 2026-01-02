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
    title: "Auto verkaufen in Dortmund – Ablauf & Bezahlung",
    items: [
      {
        q: "Wie funktioniert der Autoankauf in Dortmund bei fairankauf.de?",
        a: "Der Autoankauf in Dortmund ist einfach und transparent. Sie übermitteln Ihre Fahrzeugdaten online, erhalten ein kostenloses Angebot und vereinbaren einen Termin. Wir kommen direkt zu Ihnen nach Dortmund, holen das Auto ab und zahlen den Kaufpreis sofort aus.",
      },
      {
        q: "Wie kann ich mein Auto in Dortmund schnell verkaufen?",
        a: "Wenn Sie Ihr Auto in Dortmund schnell verkaufen möchten, ist der Händlerankauf die sicherste Lösung. Kein Inserieren, keine Probefahrten – oft ist der gesamte Verkaufsprozess innerhalb von 24 Stunden abgeschlossen.",
      },
      {
        q: "Was ist mein Auto in Dortmund aktuell wert?",
        a: "Der Fahrzeugwert richtet sich nach Marke, Modell, Zustand, Kilometerstand und aktueller Marktnachfrage im Raum Dortmund. Bei fairankauf.de erhalten Sie eine realistische und kostenlose Preiseinschätzung.",
      },
      {
        q: "Wie schnell erhalte ich mein Geld beim Autoankauf in Dortmund?",
        a: "Die Auszahlung erfolgt direkt bei Fahrzeugübergabe in Dortmund – per Echtzeitüberweisung oder auf Wunsch bar.",
      },
      {
        q: "Welche Unterlagen benötige ich für den Autoverkauf in Dortmund?",
        a: "Für den Autoverkauf in Dortmund benötigen Sie in der Regel Fahrzeugschein, Fahrzeugbrief und einen gültigen Ausweis. Fehlende Unterlagen klären wir unkompliziert gemeinsam.",
      },
    ],
  },
  {
    title: "Fahrzeugzustand & Sonderfälle in Dortmund",
    items: [
      {
        q: "Kaufen Sie auch Unfallwagen in Dortmund?",
        a: "Ja. Wir kaufen Unfallwagen in Dortmund jeder Art – auch bei starken Schäden oder Totalschaden. Nicht fahrbereite Fahrzeuge holen wir kostenlos ab.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV in Dortmund verkaufen?",
        a: "Ja. Autos ohne TÜV oder mit abgelaufener HU/AU kaufen wir in Dortmund problemlos an. Diese Fahrzeuge eignen sich besonders für Export oder Weiterverwertung.",
      },
      {
        q: "Kaufen Sie alte Autos mit hoher Laufleistung in Dortmund?",
        a: "Auch sehr alte Fahrzeuge oder Autos mit hoher Kilometerleistung kaufen wir in Dortmund an – oft zu besseren Konditionen als beim Privatverkauf.",
      },
      {
        q: "Kaufen Sie alle Automarken in Dortmund an?",
        a: "Ja. Wir kaufen alle Automarken und Modelle in Dortmund – vom Kleinwagen über SUVs bis hin zu Premiumfahrzeugen.",
      },
      {
        q: "Kaufen Sie Firmenwagen oder Leasingfahrzeuge in Dortmund?",
        a: "Ja. Firmenwagen, Leasingrückläufer und Flottenfahrzeuge kaufen wir direkt in Dortmund zu fairen Marktpreisen an.",
      },
    ],
  },
  {
    title: "Autoexport & Umwelt – Dortmund",
    items: [
      {
        q: "Was passiert mit meinem Auto nach dem Verkauf in Dortmund?",
        a: "Je nach Zustand wird Ihr Fahrzeug aus Dortmund weiterverkauft, exportiert, als Ersatzteilspender genutzt oder fachgerecht recycelt.",
      },
      {
        q: "Was bedeutet Autoexport in Dortmund?",
        a: "Beim Autoexport werden Fahrzeuge aus Dortmund in Länder mit hoher Nachfrage gebracht, wo sie weiter genutzt oder repariert werden.",
      },
      {
        q: "Ist Autoexport aus Dortmund legal?",
        a: "Ja. Unser Autoexport erfolgt vollständig legal, dokumentiert und gesetzeskonform. Für Verkäufer aus Dortmund entstehen keinerlei Risiken.",
      },
      {
        q: "Warum ist Autoexport auch aus Dortmund gut für die Umwelt?",
        a: "Autoexport reduziert Verschrottung, spart Ressourcen und verlängert den Lebenszyklus eines Fahrzeugs – ein nachhaltiger Beitrag auch für Dortmund.",
      },
      {
        q: "Warum erhalte ich beim Autoexport aus Dortmund oft einen besseren Preis?",
        a: "Fahrzeuge wie Dieselautos, Unfallwagen oder Autos ohne TÜV sind international stark gefragt. Dadurch können wir in Dortmund oft höhere Ankaufspreise anbieten.",
      },
    ],
  },
  {
    title: "Sicherheit & Vertrauen beim Autoankauf in Dortmund",
    items: [
      {
        q: "Ist der Händlerankauf in Dortmund sicherer als der Privatverkauf?",
        a: "Ja. Beim Händlerankauf in Dortmund vermeiden Sie Gewährleistungsrisiken, Betrug und Zeitverlust. Der Verkauf erfolgt rechtssicher mit Kaufvertrag.",
      },
      {
        q: "Warum fairankauf.de für den Autoankauf in Dortmund?",
        a: "fairankauf.de steht in Dortmund für faire Preise, schnelle Abwicklung, persönliche Beratung, kostenlosen Service vor Ort und rechtssicheren Autoankauf.",
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
              Autoankauf in Dortmund
            </Box>
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
            Antworten rund um Auto verkaufen in Dortmund, Auszahlung,
            Autoexport und Sicherheit.
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
