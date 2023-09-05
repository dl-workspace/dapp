import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Login, Fetch, State, Home } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}>
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/state" element={<State />} />
    </Routes>
  </BrowserRouter>
);
