import React from "react";
import Home from "./pages/home-page";
import { users } from "./data/index";
function App() {
  return <Home users={users} />;
}

export default App;
