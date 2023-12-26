import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./components/pages/home-page";
import AboutPage from "./components/pages/about-page";
import MembersPage from "./components/pages/members-pages";
import AboutRedPage from "./components/pages/about-2-page";
import BlogPage from "./components/pages/blog-page";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <MembersPage />
      <AboutRedPage />
      <BlogPage />
      <Footer />
    </>
  );
}

export default App;
