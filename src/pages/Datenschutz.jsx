import { Helmet } from "react-helmet";
import Header from "../components/Header";
import DatenschutzSection from "../components/DatenschutzSection";
import Footer from "../components/Footer";

export default function Datenschutz() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Datenschutz – Fairankauf</title>
        <meta
          name="description"
          content="Datenschutzerklärung von Fairankauf. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Datenschutz – Fairankauf" />
        <meta
          property="og:description"
          content="Datenschutzerklärung von Fairankauf gemäß DSGVO."
        />
        <meta property="og:url" content="https://fairankauf.de/datenschutz" />
        <meta property="og:type" content="article" />

        {/* ================= PRIVACY POLICY SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://fairankauf.de/datenschutz#privacy",
            "url": "https://fairankauf.de/datenschutz",
            "name": "Datenschutzerklärung – Fairankauf",
            "description":
              "Datenschutzerklärung der Website fairankauf.de gemäß DSGVO.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Fairankauf",
              "url": "https://fairankauf.de"
            },
            "about": {
              "@type": "Thing",
              "name": "Datenschutz"
            }
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <Header />
      <DatenschutzSection />
      <Footer />
    </>
  );
}
