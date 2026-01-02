import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGBSection from "./pages/AGBSection";
import ContactSection from "./pages/ContactSection";
import AutoankaufFAQPage from "./pages/Faq-autoankauf";
import Autoankaufblog from "./pages/Autoankaufblog";
import AutoankaufNRW from "./pages/AutoankaufNRW";
import AutoExportSection from "./pages/Autoexport";
import Autoankaufdortmund from "./pages/Autoankaufdortmund";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>

        <Routes>
          <Route path="/" element={<Navigate to="/autoankauf-nrw" replace />} />
           <Route path="/autoankauf-nrw" element={<AutoankaufNRW />} />
            <Route path="/autoankauf-dortmund" element={<Autoankaufdortmund />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGBSection />} />
           <Route path="/kontakt" element={<ContactSection />} />
           <Route path="/faq-autoankauf" element={<AutoankaufFAQPage />} />
            <Route path="/blog-autoankauf" element={<Autoankaufblog />} />
             <Route path="/auto-export" element={<AutoExportSection />} />
           
        </Routes>
     
      </Router>
    </ThemeProvider>
  );
}

export default App;
