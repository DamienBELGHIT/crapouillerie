import "./index.css"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import Slideshow from "../../components/Slideshow"
import WaterlillyTitle from "../../components/WaterlillyTitle"

function Home() {
  return (
    <div id="main-section">
      <div>
        <div>
          <WaterlillyTitle title="La Crapouillerie, association d’education populaire" />
        </div>
        <div className="bio">
          <img src={logo} alt="Logo" />
          <div className="description">
            <p>
              La Crapouillerie est une <b>association d’éducation populaire</b>{" "}
              qui développe et anime un lieu d’éducation en <b>pleine nature</b>{" "}
              sur un territoire riche d’histoires et de possibles. Notre
              association accueille des{" "}
              <b>colonies de vacances, des formations, chantiers-école</b> et
              autres événements en accord avec nos valeurs, à{" "}
              <b>la Grande Noé</b>, Treillières 44119.
            </p>
            <Slideshow images={logo} />
            <Link to="/activites" className="redirect">
              Voir nos activités ➡
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <WaterlillyTitle title="Qui sommes-nous ?" />
        </div>
        <div>
          <p>
            L’éclosion de la Crapouillerie : Depuis 2021, nous accueillons tous
            les étés à la Grande Noé des séjours de vacances pour des jeunes de
            6 à 17 ans. Ces séjours sont organisés par l’association La
            Bidouillerie, basée à Rennes, qui propose depuis 2013 des colos
            centrées sur la participation des jeunes. Les piliers de ces séjours
            sont la démocratie participative, un taux d’encadrement important
            des jeunes avec 1 adulte pour 4/5 enfants, des choix écologiques
            (nourriture bio/locale, lieux nature, pas/peu d’activités de
            consumérisme) et la mixité sociale. Ces séjours sont une réussite,
            les enfants et ados, ainsi que les équipes d’animation, prennent du
            plaisir à être sur le lieu, s’y investissent (construction de
            cabanes, d’une cuisine extérieure, de yourte…) et tissent des liens
            avec le territoire (artisanat, participation à des récoltes de
            fruits et légumes, fabrication de pain…). Cela crée une petite
            ébullition autour du lieu et offre de belles opportunités (prêt d’un
            dôme géodésique pendant plusieurs années, artisan-nes de la
            construction qui proposent leurs compétences, dons de jeux et vélos
            pour enfants…). Entre 2021 et 2023 plus de 160 enfants ont passé
            leurs vacances à La Grande Noé. Notre collectif s’est créé autour de
            l’envie de voir ce nouveau lieu d’animation exploré et investi par
            les habitant.es du territoire. L’association La Crapouillerie est
            née en 2022 afin d’organiser de nouveaux événements pour faire de la
            Grande Noé un lieu de rencontres en milieu rural. Les activités de
            la Crapouillerie s’organisent autour de trois axes : la construction
            du lieu (infrastructures, soin du vivant), l’accueil d’événements
            extérieurs (réunions d’association, jeu de rôles grandeur nature,
            formations, séjours..) et l’animation de nos propres événements
            (chantiers-écoles, festival familial…). Pour en savoir plus sur les
            activités du moment et s’inscrire c’est par ici : page activités Les
            valeurs que nous portons sur ce lieu et dans nos activités
            s’articulent autour de cinq piliers : l’autonomie et l’autogestion
            l’entraide et la coopération la confiance en soi et l’audace
            l’ancrage territorial et l’écologie l’inclusion et la mixité Pour en
            savoir plus sur nos valeurs c’est par ici :
            <Link to="/valeurs">Nos Valeurs</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
