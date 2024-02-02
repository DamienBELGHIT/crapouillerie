import { Outlet, Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import logoTxt from "../../assets/img/logoTxt.png"
import "./header.css"
import "./footer.css"
import { useLocation } from "react-router-dom"

function Layout() {
  const location = useLocation()
  return (
    <div>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <img src={logoTxt} alt="LogoText" />
          </div>
        </Link>
        <nav>
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
        <span>email : lacrapouillerie@gmail.com</span>
      </footer>
    </div>
  )
}

export default Layout
