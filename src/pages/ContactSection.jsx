import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Kontakt() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Kontakt – Fairankauf | Autoankauf & Autoexport NRW</title>
        <meta
          name="description"
          content="Kontaktieren Sie Fairankauf – Ihr Partner für Autoankauf & Autoexport in NRW. Jetzt unverbindlich anfragen per Telefon, WhatsApp oder Formular."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Kontakt – Fairankauf" />
        <meta
          property="og:description"
          content="Jetzt Kontakt zu Fairankauf aufnehmen. Auto verkaufen oder Export anfragen – schnell & unkompliziert."
        />
        <meta property="og:url" content="https://fairankauf.de/kontakt" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        {/* ================= CONTACT PAGE SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://fairankauf.de/kontakt#contactpage",
            "url": "https://fairankauf.de/kontakt",
            "name": "Kontakt – Fairankauf",
            "description":
              "Offizielle Kontaktseite von Fairankauf. Nehmen Sie Kontakt auf für Autoankauf oder Autoexport in NRW.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Fairankauf",
              "url": "https://fairankauf.de",
              "logo": "https://fairankauf.de/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49 123 456789",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": ["de"]
              }
            }
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <Header />
      <ContactSection />
      <Footer />
    </>
  );
}
