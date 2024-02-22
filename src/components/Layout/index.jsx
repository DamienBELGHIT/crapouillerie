import { Outlet, Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import logoTxt from "../../assets/img/logoTxt.png"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import "./header.css"
import "./footer.css"

function Layout() {
  const [navVisible, setNavVisible] = useState(false)
  const location = useLocation()

  return (
    <div>
      <header>
        <div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
              <img src={logoTxt} alt="LogoText" />
            </Link>
          </div>
          <div
            className="burger-menu"
            onClick={() => setNavVisible(!navVisible)}
          >
            {navVisible ? "X" : <FaBars />}
          </div>
        </div>
        <nav className={"nav-btns" + (navVisible ? "" : " mobile-hidden")}>
          <ul>
            <li className={location.pathname === "/" ? "selected" : undefined}>
              <Link to="/">Accueil</Link>
            </li>
            <li
              className={
                location.pathname === "/valeurs" ? "selected" : undefined
              }
            >
              <Link to="/valeurs">Nos Valeurs</Link>
            </li>
            <li
              className={
                location.pathname === "/equipe" ? "selected" : undefined
              }
            >
              <Link to="/equipe">L&apos;équipe</Link>
            </li>
            <li
              className={location.pathname === "/lieu" ? "selected" : undefined}
            >
              <Link to="/lieu">Le Lieu</Link>
            </li>
            <li
              className={
                location.pathname === "/activites" ? "selected" : undefined
              }
            >
              <Link to="/activites">Nos Activités</Link>
            </li>
            <li
              className={
                location.pathname === "/reservations" ? "selected" : undefined
              }
            >
              <Link to="/reservations">Réservations</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <img src={logo} alt="Logo" />
        <span>
          ✉ associationlacrap
          <span className="blockspam" aria-hidden="true">
            PLEASE GO AWAY!
          </span>
          ouillerie@
          <span className="blockspam" aria-hidden="true">
            PLEASE GO AWAY!
          </span>
          gmail.com
        </span>
        <span>✆ 06 68 84 69 23</span>
      </footer>
    </div>
  )
}

export default Layout
