import "./index.css"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgHome1 from "../../assets/img/pictures/espace_ombragee_bis.jpg"
import imgHome2 from "../../assets/img/pictures/charpente_enfants.jpeg"
import imgHome3 from "../../assets/img/pictures/jeux_dome.jpg"
import imgDescStart from "../../assets/img/pictures/espace_ombragee.jpg"
import imgDescActivites from "../../assets/img/pictures/espace_feu.jpg"
import imgDescValeurs from "../../assets/img/pictures/grande_prairie _manon_brule.jpg"
import LineSeparator from "../../components/LineSeparator"

function Home() {
  return (
    <div id="main-section">
      <div>
        <WaterlillyTitle title="La Crapouillerie, association d’education populaire" />
        <div className="bio">
          <div className="home-desc">
            <img src={logo} alt="Logo" />
            <div className="description">
              <p>
                La Crapouillerie est une{" "}
                <b>association d’éducation populaire</b> qui développe et anime
                un lieu d’éducation en <b>pleine nature</b> sur un territoire
                riche d’histoires et de possibles. Notre association accueille
                des <b>colonies de vacances, des formations, chantiers-école</b>{" "}
                et autres événements en accord avec nos valeurs, à{" "}
                <b>la Grande Noé</b>, Treillières 44119.
              </p>
              <Link to="/activites" className="redirect">
                Voir nos activités ➡
              </Link>
            </div>
          </div>
          <div className="gallery">
            <img src={imgHome1} alt="Gallery" />
            <img src={imgHome2} alt="Gallery" />
            <img src={imgHome3} alt="Gallery" />
          </div>
        </div>
      </div>

      <LineSeparator />

      <div>
        <div>
          <WaterlillyTitle title="Qui sommes-nous ?" />
        </div>
        <div className="description">
          <article id="home-start">
            <div>
              <h3>L’eclosion de la Crapouillerie</h3>
              <div>
                <div>
                  <p>
                    Depuis <b>2021</b>, nous accueillons tous les étés à la
                    Grande Noé des séjours de vacances pour des jeunes de{" "}
                    <b>6 à 17 ans</b>. Ces séjours sont organisés par
                    l’association{" "}
                    <a href="https://www.labidouillerie.fr/">
                      <nobr>La Bidouillerie</nobr>
                    </a>
                    , basée à Rennes, qui propose depuis 2013 des colos centrées
                    sur la participation des jeunes.
                    <br />
                    <br />
                    Les <b>4 piliers</b> de ces séjours sont :
                  </p>
                  <ul>
                    <li>● La démocratie participative</li>
                    <li>
                      ● Un taux d’encadrement important des jeunes avec 1 adulte
                      pour 4/5 enfants
                    </li>
                    <li>
                      ● Des choix écologiques (nourriture bio/locale, lieux
                      nature, pas/peu d’activités de consumérisme)
                    </li>
                    <li>● La mixité sociale</li>
                  </ul>
                </div>
                <img src={imgDescStart} alt="work" />
              </div>
              <p>
                Ces séjours sont une <b>réussite</b>, les enfants et ados, ainsi
                que les équipes d’animation, prennent du plaisir à être sur le
                lieu, <b>s’y investissent</b> (construction de cabanes, d’une
                cuisine extérieure, de yourte…) et{" "}
                <b>tissent des liens avec le territoire </b>
                (artisanat, participation à des récoltes de fruits et légumes,
                fabrication de pain…).
                <br /> Cela crée une petite ébullition autour du lieu et offre
                de
                <b> belles opportunités</b> (prêt d’un dôme géodésique pendant
                plusieurs années, artisan-nes de la construction qui proposent
                leurs compétences, dons de jeux et vélos pour enfants…). <br />{" "}
                <br />
                Entre 2021 et 2023 <b>plus de 160 enfants</b> ont passé leurs
                vacances à La Grande Noé. Notre collectif s’est créé autour de
                l’envie de voir ce nouveau lieu d’animation{" "}
                <b>exploré et investi </b>
                par les habitant.es du territoire. L’association La
                Crapouillerie est née en <b>2022</b> afin d’organiser de
                nouveaux événements pour faire de la Grande Noé un lieu de
                rencontres en milieu rural.
              </p>
            </div>
          </article>

          <LineSeparator />

          <article id="home-activities">
            <img src={imgDescActivites} alt="kids" />
            <div>
              <h3>Nos Activites</h3>
              <p>
                Les activités de la Crapouillerie s’organisent autour de{" "}
                <b>3 axes</b> : <b>la construction du lieu</b> (infrastructures,
                soin du vivant), <b>l’accueil d’événements extérieurs</b>{" "}
                (réunions d’association, jeu de rôles grandeur nature,
                formations, séjours..) et{" "}
                <b>l’animation de nos propres événements</b> (chantiers-écoles,
                festival familial…). <br />
                <br />
                Pour en savoir plus sur les activités du moment et s’inscrire
                c’est par ici :
              </p>
              <Link to="/activites" className="redirect">
                Voir nos activités ➡
              </Link>
            </div>
          </article>

          <LineSeparator />

          <article id="home-valeurs">
            <div>
              <h3>Nos Valeurs</h3>
              <div>
                <div>
                  <p>
                    Les valeurs que nous portons sur ce lieu et dans nos
                    activités s’articulent autour de <b>5 piliers</b> :
                  </p>
                  <ul>
                    <li>● L’autonomie et l’autogestion</li>
                    <li>● L’entraide et la coopération</li>
                    <li>● La confiance en soi et l’audace</li>
                    <li>● L’ancrage territorial et l’écologie</li>
                    <li>● L’inclusion et la mixité</li>
                  </ul>
                  <p>Pour en savoir plus sur nos valeurs c’est par ici :</p>
                </div>
              </div>
              <Link to="/valeurs" className="redirect">
                Voir nos valeurs ➡
              </Link>
            </div>
            <img src={imgDescValeurs} alt="kids" />
          </article>
        </div>
      </div>
    </div>
  )
}

export default Home
