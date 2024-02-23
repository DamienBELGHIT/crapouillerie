import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgDrey from "../../assets/img/pictures/dreo_hangar.jpg"
import imgFlo from "../../assets/img/pictures/Flo.jpg"
import imgNino from "../../assets/img/pictures/chantier_tole_nino.jpg"
import imgTeam1 from "../../assets/img/pictures/shovel_fight.jpg"
import imgTeam2 from "../../assets/img/pictures/chantier_brouette.jpg"
import imgTeam3 from "../../assets/img/pictures/couverture_cuisine.jpeg"
import LineSeparator from "../../components/LineSeparator"

function Equipe() {
  const colors = [
    "#e52953",
    "#f48f41",
    "#cccf14",
    "#70dda6",
    "#49b8d4",
    "#cc89d6",
  ]

  const crapouilles = [
    "Julia",
    "Gwen",
    "Maeli",
    "Nelo",
    "Manon",
    "Lenouch",
    "Marie",
    "Yu",
    "Chanchan",
    "Adel",
    "Adil",
    "Charly",
    "Ced",
    "Kuma",
    "Caro",
    "Zouzou",
    "Jo",
    "Damien",
    "Roméo",
    "Brûle",
  ]
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
          <img src={imgDrey} alt="work" />
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

        <article className="crapouille">
          <div>
            <h3>Nino</h3>
            <p>
              Moi c’est Nino, j’aime beaucoup me <b>baigner</b>, découvrir de
              nouveaux
              <b> jeux et sport</b>, et les <b>aventures</b>. Une des choses que
              je préfère à la Grande Noé c’est dormir à beaucoup dans le{" "}
              <b>dôme</b>.
            </p>
          </div>
          <img src={imgNino} alt="work" />
        </article>

        <LineSeparator />
        <article>
          <div>
            <p>
              Mais il y a aussi
              {crapouilles.map((crapouille, index) => (
                <span
                  key={crapouille}
                  style={{ color: colors[index % colors.length] }}
                >
                  {" " + crapouille + ", "}
                </span>
              ))}
              et d’autres <b>crapouilles</b> en tout genre !
            </p>
          </div>
        </article>
        <div className="gallery">
          <img src={imgTeam1} alt="Gallery" />
          <img src={imgTeam2} alt="Gallery" />
          <img src={imgTeam3} alt="Gallery" />
        </div>
      </div>
    </div>
  )
}

export default Equipe
