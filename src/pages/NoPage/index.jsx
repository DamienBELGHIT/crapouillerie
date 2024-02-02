import "./index.css"
import questionFrog from "../../assets/img/404.png"
import { Link } from "react-router-dom"

function NoPage() {
  return (
    <div id="main-section">
      <div className="errorSection">
        <h1>ERREUR 404</h1>
        <h3>Désolé, la page que vous recherchez n&apos;existe pas...</h3>
        <Link to="/" className="redirect">
          Revenir à l&apos;accueil ➡
        </Link>
        <img src={questionFrog} alt="Logo" />
      </div>
    </div>
  )
}

export default NoPage
