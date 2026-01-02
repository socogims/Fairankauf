import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function ContactSection() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #14162e 0%, #0f1020 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* SEO-starker Titel */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            Autoankauf & Fahrzeugverkauf in NRW – schnell, flexibel & fair
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 680, mx: "auto" }}>
            Sie möchten Ihr Auto schnell und unkompliziert verkaufen? Wir reagieren flexibel, kommen direkt zu Ihnen vor Ort und sichern Ihnen faire Ankaufspreise – ohne Wartezeit und unnötigen Aufwand.
          </Typography>
        </Box>

        {/* Call-to-Actions */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" mb={6}>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="contained"
            sx={{ bgcolor: "#25D366", "&:hover": { bgcolor: "#1ebe5c" } }}
            href="https://wa.me/491234567890"
            target="_blank"
          >
            WhatsApp Chat
          </Button>

          <Button
            startIcon={<PhoneIcon />}
            variant="contained"
            sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "#ff7a2f" } }}
            href="tel:+491234567890"
          >
            Jetzt anrufen
          </Button>

          <Button
            startIcon={<EmailIcon />}
            variant="contained"
            sx={{ bgcolor: "secondary.main", "&:hover": { bgcolor: "#ff914d" } }}
            onClick={() => setShowEmailForm(!showEmailForm)}
          >
            E-Mail schreiben
          </Button>
        </Stack>

        {/* Mailformular */}
        {showEmailForm && (
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 6,
            }}
          >
            <TextField label="Name" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
            <TextField label="E-Mail" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
            <TextField
              label="Nachricht"
              variant="filled"
              multiline
              rows={4}
              fullWidth
              InputProps={{ sx: { color: "#fff" } }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "#ff7a2f" } }}
            >
              Nachricht senden
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
