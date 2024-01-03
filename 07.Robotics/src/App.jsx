import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Home from "./pages/home-page";
import MainProducts from "./pages/main-products-page";
import { users } from "./data/data";
import Footer from "./layouts/footer";

function App() {
  console.log(users);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<MainProducts users={users} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
