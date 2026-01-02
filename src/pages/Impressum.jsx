import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImpressumSection from "../components/ImpressumSection";

export default function Impressum() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Impressum – Fairankauf.de | Autoankauf NRW</title>
        <meta
          name="description"
          content="Impressum von Fairankauf.de – Offizielle Angaben zu Unternehmen, Adresse, Kontaktinformationen für Autoankauf in NRW."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Impressum – Fairankauf.de" />
        <meta
          property="og:description"
          content="Impressum von Fairankauf.de mit allen wichtigen Unternehmensinformationen."
        />
        <meta property="og:url" content="https://fairankauf.de/impressum" />
        <meta property="og:type" content="website" />

        {/* ================= ORGANIZATION SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Fairankauf.de",
            "url": "https://fairankauf.de",
            "logo": "https://fairankauf.de/images/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+49-123-456789",
                "contactType": "customer service",
                "areaServed": "DE"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Musterstraße 1",
              "addressLocality": "Dortmund",
              "postalCode": "44135",
              "addressCountry": "DE"
            }
          })}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <Header />
      <ImpressumSection />
      <Footer />
    </>
  );
}
