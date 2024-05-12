import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Valeurs from "./pages/Valeurs"
import Equipe from "./pages/Equipe"
import NoPage from "./pages/NoPage"
import LaGrandeMalice from "./pages/LaGrandeMalice"
import Lieu from "./pages/Lieu"
import Reservations from "./pages/Reservations"
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="valeurs" element={<Valeurs />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="lieu" element={<Lieu />} />
          <Route path="activites" element={<LaGrandeMalice />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
