import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./components/pages/home-page";
import AboutPage from "./components/pages/about-page";
import MembersPage from "./components/pages/members-pages";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <MembersPage />
      <Footer />
    </>
  );
}

export default App;
