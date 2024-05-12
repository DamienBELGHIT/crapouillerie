import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgDescFesticolo1 from "../../assets/img/pictures/charpente_enfants.jpeg"
import imgDescFesticolo2 from "../../assets/img/pictures/grande_prairie_marie_sourit.jpg"
import imgDescFesticolo3 from "../../assets/img/pictures/youn_cabane.jpg"
import imgDescFesticolo4 from "../../assets/img/pictures/tableau_libre_choix.jpg"
import imgDescFesticolo5 from "../../assets/img/pictures/enfants_butte.jpg"
import imgAffiche from "../../assets/img/pictures/afficheGrandeMalice.png"
import { Link } from "react-router-dom"
import LineSeparator from "../../components/LineSeparator"

function Activites() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Festicolo 12-15 ans" />
      <div className="festicoloSection">
        <article id="festicolo-bio">
          <p>
            T’es-tu déjà demandé ce qu’il se passait dans les{" "}
            <b>coulisses d’un événement</b> ? De la <b>décoration</b> au{" "}
            <b>montage de la scène</b> en passant par l’accueil des{" "}
            <b>artistes</b> et la <b>communication</b>, <b>l’adrénaline</b>,
            <b> l’arrivée du public</b>,{" "}
            <b>l’ambition des frites bien cuites</b>,<b> l’anticipation</b> et
            le <b>plaisir</b> des derniers détails, croiser les doigts pour un
            super <b>soleil</b>, faire partie d’une
            <b> équipe</b> ... C’est ce à quoi nous venons t’inviter à vivre
            pendant 10 jours, en t’impliquant dans les préparatifs de « La
            Grande Malice », une journée <b>festive et familiale</b> organisée
            par et pour les enfants !
          </p>
          <img src={imgAffiche} alt="work" />
        </article>
        <LineSeparator />

        <article id="festicolo-sejour">
          <div>
            <h3>Un sejour pas comme les autres</h3>
            <p>
              L’organisation d’un <b>mini festival</b> avec des jeunes, ce ne
              sera pas exactement comme les colos classiques. Nous sommes{" "}
              <b>5 animateur·ices</b> à travailler en amont sur l’événement
              (affiche, choix des artistes/intervenant.es, réservation des
              structures, du matériel), mais nous laissons aussi plein de place
              pour construire ensemble, lors de ce séjour le programme et
              <b> l’ambiance</b> que l’on souhaite faire vivre aux
              participant·es !
              <br />
              <br />
              Si tu rejoins <b>l’aventure</b>, tu ne seras pas un simple
              bénévole le jour J ! Tu feras partie de <b>l’organisation</b> et
              de la <b>mise en œuvre </b>
              de l’évènement. Tu auras des <b>responsabilités</b> individuelles
              et d’équipe. Car tout au long de la semaine qui précède{" "}
              <b>la Grande Malice</b>, tu pourras t’impliquer dans l’un des
              groupes de ton choix (communication, restauration, ambiance,
              technique, accueil). Ce sera l’occasion d’apprendre de nouvelles
              choses mais aussi de laisser parler ta <b>créativité</b> et de
              proposer tes idées ! Bien sûr nous ne passerons pas tout notre
              temps à organiser La Grande Malice. Nous aurons aussi pleins de
              <b> moments libres</b> où tu pourras choisir tes activités. Le
              camp est organisé pour que tu puisses participer si tu le
              souhaites à la
              <b> cuisine</b> et au choix du menu, l’occasion de découvrir les
              <b> aliments bios et locaux</b> produits sur place, ou de partager
              tes spécialités de gourmet en proposant tes recettes !
            </p>
          </div>
          <img src={imgDescFesticolo1} alt="work" />
        </article>
        <LineSeparator />

        <article id="festicolo-lieu">
          <img src={imgDescFesticolo2} alt="work" />
          <div>
            <h3>Le lieu et les environs</h3>
            <p>
              Notre camp sera installé dans une<b> prairie</b> entourée d’un
              espace boisé sur le lieu d’animation, au sein du territoire de
              l’ancienne lutte contre un aéroport sur la commune de
              <b> Notre Dame des Landes</b> aujourd’hui légalisé. Nous dormirons
              dans des<b> tentes</b> et des<b> barnums</b> seront également
              prévues pour les activités et l’infirmerie. Le
              <b> dôme géodésique</b>, fabriqué et installé sur notre camp sera
              le meilleur endroit pour rester au calme, lire, discuter,
              échanger, débattre et faire des jeux de société. Le camp est
              équipé de<b> toilettes sèches</b> et nous aurons des
              <b> douches chaudes </b>
              (même en absence de soleil !).
            </p>
          </div>
        </article>
        <LineSeparator />

        <article id="festicolo-activites">
          <div>
            <h3>Les activites</h3>
            <p>
              Cet endroit offre de nombreuses possibilités comme notamment la
              découverte de<b> savoirs faire artisanaux</b> (forge,
              boulangerie...). Tu pourras également mettre les mains dans la
              terre en participant aux<b> cultures collectives</b> ou encore
              apprendre à<b> réparer des vélos</b>, organiser et faire vivre un
              endroit de<b> zone libre de vêtements</b> ! Sur ce terrain bordé
              de chênes centenaires, nous aurons des temps dédiés aux
              préparatifs de La Grande Malice mais nous pourrons aussi partir
              explorer le territoire de la<b> ZAD</b> (Zone A Defendre) avec des
              balades naturalistes, excursions en forêt... Mais aussi rester sur
              le camp pour<b> jouer, lire, discuter, faire du sport</b> (comme
              du tissu aérien) ou tout autre activité qui te tenterait.
            </p>
          </div>
          <img src={imgDescFesticolo3} alt="work" />
        </article>
        <LineSeparator />

        <article id="festicolo-prix">
          <img src={imgDescFesticolo4} alt="work" />
          <div>
            <h3>Le prix</h3>
            <p>
              Ce séjour n’est pas une colonie classique, les animateur·ices et
              organisateur·ices de La Grande Malice sont<b> bénévoles</b>. Nous
              voulons que chaque enfant qui le souhaite puisse participer à
              l’organisation de l’événement. C’est pourquoi nous fixerons une
              participation aux<b> frais au cas par cas</b> avec les familles
              des jeunes motivé.es.
            </p>
          </div>
        </article>

        <LineSeparator />

        <article id="festicolo-hate">
          <div>
            <h3>On a hate</h3>
            <p>
              Nous restons disponibles pour toutes tes questions, auxquelles
              nous prendrons plaisir à répondre. C’est vrai, ça peut faire peur,
              c’est<b> nouveau</b>, ça change, mais rassure-toi pour nous aussi.
              Alors nous ferons équipe pour ensemble se rassurer, s’entourer,
              s’aider et puis quoi de mieux pour avoir plein de belles choses à
              raconter ! Notre seule attente envers toi, c’est ta
              <b> motivation</b>. Il est important pour nous d’avoir de faire
              équipe avec des personnes qui ont elle-même choisie de participer
              et de<b> s’investir</b> dans la festicolo ! Le reste ne sera
              <b>
                {" "}
                qu’aventure et découverte, partage et plaisir de construire
                ensemble{" "}
              </b>
              ! Lorsque le séjour sera complet, une<b> liste d’attente</b> sera
              mise en place.
            </p>
          </div>
          <img src={imgDescFesticolo5} alt="work" />
        </article>

        <article id="festicolo-reservation">
          <Link to="/reservations" className="redirect">
            Comment s’inscrire ➡
          </Link>
        </article>
      </div>
    </div>
  )
}

export default Activites
