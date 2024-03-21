import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Services from "./routes/Services.js";
import Error from "./routes/Error.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
