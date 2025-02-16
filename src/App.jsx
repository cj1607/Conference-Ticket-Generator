import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Ticket from "./components/Ticket";

import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
    </>
  );
}

export default App;
