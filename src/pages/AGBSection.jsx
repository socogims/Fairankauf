import { Helmet } from "react-helmet";
import Header from "../components/Header";
import AGBSection from "../components/AGBSection";
import Footer from "../components/Footer";

export default function AGB() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>AGB – Allgemeine Geschäftsbedingungen | Fairankauf</title>
        <meta
          name="description"
          content="Hier finden Sie die Allgemeinen Geschäftsbedingungen (AGB) von Fairankauf. Transparente und rechtssichere Informationen zum Autoankauf."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="AGB – Allgemeine Geschäftsbedingungen | Fairankauf" />
        <meta
          property="og:description"
          content="Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von Fairankauf – transparent, fair und rechtssicher."
        />
        <meta property="og:url" content="https://fairankauf.de/agb" />
        <meta property="og:type" content="website" />

        {/* ================= SCHEMA MARKUP ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://fairankauf.de/agb#webpage",
            "name": "Allgemeine Geschäftsbedingungen | Fairankauf",
            "url": "https://fairankauf.de/agb",
            "description":
              "Allgemeine Geschäftsbedingungen (AGB) von Fairankauf – rechtliche Informationen zur Nutzung unserer Autoankauf-Dienstleistungen.",
            "inLanguage": "de-DE",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Fairankauf",
              "url": "https://fairankauf.de"
            },
            "about": {
              "@type": "CreativeWork",
              "name": "Allgemeine Geschäftsbedingungen",
              "publisher": {
                "@type": "Organization",
                "name": "Fairankauf",
                "url": "https://fairankauf.de",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://fairankauf.de/logo.png"
                }
              }
            }
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <Header />
      <AGBSection />
      <Footer />
    </>
  );
}
