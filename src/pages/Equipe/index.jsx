import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgDreo from "../../assets/img/pictures/Hangar4.jpg"
import imgFlo from "../../assets/img/pictures/Flo.jpg"
import LineSeparator from "../../components/LineSeparator"

function Equipe() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Les Crapouilles" />
      <div>
        <article className="crapouille">
          <div>
            <h3>Dreo</h3>
            <p>
              On m’appelle Dreo, j’aime les <b>marionnettes</b>, le{" "}
              <b>tissu aérien</b> et le
              <b> bricolage</b>.
              <br />
              Mes moments préférés à la Grande Noé c’est quand on fait des{" "}
              <b>chantiers</b> entre personnes très différentes, qui apprennent
              les unes des autres.
            </p>
          </div>
          <img src={imgDreo} alt="work" />
        </article>

        <LineSeparator />

        <article className="crapouille">
          <img src={imgFlo} alt="work" />
          <div>
            <h3>Flo</h3>
            <p>
              Moi c’est Flo, j’aime les <b>livres</b>, les <b>jeux de cache</b>{" "}
              en forêt et le
              <b> sport</b>. A la Grande Noé ce que je préfère ce sont les
              longues
              <b> soirées d’été</b> autour d’une grande tablée, lors d’une colo
              ou d’un chantier !
            </p>
          </div>
        </article>

        <LineSeparator />
      </div>
    </div>
  )
}

export default Equipe
