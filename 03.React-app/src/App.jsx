import "./App.css";
import Header from "./layouts/header";
import AboutPage from "./components/pages/about-page";
import ServicesPage from "./components/pages/services-page";
import BlogPage from "./components/pages/blog-page";
import Footer from "./layouts/footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/not-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
