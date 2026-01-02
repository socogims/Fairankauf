import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";
import TikTokIcon from "@mui/icons-material/MusicNote";

export default function Footer() {
  const services = [
    { name: "Auto verkaufen", href: "/autoankauf-nrw" },
    { name: "Online Fahrzeugbewertung", href: "/autoankauf-nrw" },
    { name: "Abholung & Sofortzahlung", href: "#ablauf" },
    { name: "Gebrauchtwagen Ankauf", href: "#faq" },
    { name: "Unfallwagen Ankauf", href: "#fahrzeugzustand" },
    { name: "Export & Recycling", href: "/auto-export" },
    { name: "Privatverkauf Beratung", href: "#vorteile-haendler" },
  ];

  const quickLinks = [
    { name: "FAQ Autoankauf", href: "/faq-autoankauf" },
    { name: "Blog & Ratgeber", href: "/blog-autoankauf" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ];

  const socialIcons = [
    { icon: GoogleIcon, label: "Google" },
    { icon: WhatsAppIcon, label: "WhatsApp" },
    { icon: TelegramIcon, label: "Telegram" },
    { icon: InstagramIcon, label: "Instagram" },
    { icon: TwitterIcon, label: "Twitter" },
    { icon: TikTokIcon, label: "TikTok" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #14162e 0%, #0f1020 100%)",
        color: "#fff",
        pt: 8,
        pb: 4,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          justifyContent="center"
          textAlign={{ xs: "center", md: "left" }}
        >
          {/* SERVICES */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "primary.main",
              }}
            >
              Unsere Services
            </Typography>

            <Stack spacing={1}>
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* QUICK LINKS */}
        <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ fontWeight: 800, mb: 2,color: "primary.main" }}>
              Schnellzugriff
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT & SOCIAL */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              spacing={2}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ color: "primary.main" }} />
                <Typography itemProp="telephone">
                  +49 780 943984
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon sx={{ color: "primary.main" }} />
                <Typography itemProp="email">
                  contact@fairankauf.de
                </Typography>
              </Box>

              <Stack
                direction="row"
                spacing={1}
                mt={2}
                justifyContent="center"
                flexWrap="wrap"
              >
                {socialIcons.map((social, i) => {
                  const IconComponent = social.icon;
                  return (
                    <IconButton
                      key={i}
                      aria-label={social.label}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.08)",
                        color: "#fff",
                        "&:hover": { bgcolor: "primary.main" },
                      }}
                    >
                      <IconComponent />
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.9rem",
          }}
        >
          <Typography component="p" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} Fairankauf. Alle Rechte vorbehalten.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Link
              href="/impressum"
              underline="hover"
              sx={{ color: "rgba(255,255,255,0.6)" }}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              underline="hover"
              sx={{ color: "rgba(255,255,255,0.6)" }}
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              underline="hover"
              sx={{ color: "rgba(255,255,255,0.6)" }}
            >
              AGB
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
