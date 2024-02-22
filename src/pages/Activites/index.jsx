import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgDescFesticolo1 from "../../assets/img/pictures/Dog.png"
import imgDescFesticolo2 from "../../assets/img/pictures/Dog.png"
import imgDescFesticolo3 from "../../assets/img/pictures/Dog.png"
import imgDescFesticolo4 from "../../assets/img/pictures/Dog.png"
import imgDescFesticolo5 from "../../assets/img/pictures/Dog.png"
import { Link } from "react-router-dom"

function Activites() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Festicolo 12-15 ans" />
      <div className="festicoloSection">
        <div>
          T’es-tu déjà demandé ce qu’il se passait dans les coulisses d’un
          événement ? De la décoration au montage de la scène en passant par
          l’accueil des artistes et la communication, l’adrénaline, l’arrivée du
          public, l’ambition des frites bien cuites, l’anticipation et le
          plaisir des derniers détails, croiser les doigts pour un super soleil,
          faire partie d’une équipe... C’est ce à quoi nous venons t’inviter à
          vivre pendant 10 jours, en t’impliquant dans les préparatifs de « La
          Grande Malice », une journée festive et familiale organisée par et
          pour les enfants !
        </div>

        <article>
          <div>
            <h3>Un sejour pas comme les autres</h3>
            <p>
              C’est une première à la Bidouillerie, l’organisation d’un mini
              festival avec des jeunes. Ce ne sera donc pas exactement comme les
              colos classiques. Nous sommes 5 animateur·ices à travailler en
              amont sur l’événement (affiche, choix des artistes/intervenant.es,
              réservation des structures, du matériel), mais nous laissons aussi
              plein de place pour construire ensemble, lors de ce séjour le
              programme et l’ambiance que l’on souhaite faire vivre aux
              participant·es ! Si tu rejoins l’aventure, tu ne seras pas un
              simple bénévole le jour J ! Tu feras partie de l’organisation et
              de la mise en œuvre de l’évènement. Tu auras des responsabilités
              individuelles et d’équipe. Car tout au long de la semaine qui
              précède la Grande Malice, tu pourras t’impliquer dans l’un des
              groupes de ton choix (communication, restauration, ambiance,
              technique, accueil). Ce sera l’occasion d’apprendre de nouvelles
              choses mais aussi de laisser parler ta créativité et de proposer
              tes idées ! Bien sûr nous ne passerons pas tout notre temps à
              organiser La Grande Malice. Nous aurons aussi pleins de moments
              libres où tu pourras choisir tes activités. Le camp est organisé
              pour que tu puisses participer si tu le souhaites à la cuisine et
              au choix du menu, l’occasion de découvrir les aliments bios et
              locaux produits sur place, ou de partager tes spécialités de
              gourmet en proposant tes recettes !
            </p>
          </div>
          <img src={imgDescFesticolo1} alt="work" />
        </article>

        <article>
          <img src={imgDescFesticolo2} alt="work" />
          <div>
            <h3>Le lieu et les environs</h3>
            <p>
              Notre camp sera installé dans une prairie entourée d’un espace
              boisé sur le lieu d’animation de La Crapouillerie (petite sœur de
              la Bidouillerie, avec qui nous co-organisons la Grande Malice), au
              sein du territoire de l’ancienne lutte contre un aéroport sur la
              commune de Notre Dame des Landes aujourd’hui légalisé. Nous
              dormirons dans des tentes et des barnums seront également prévues
              pour les activités et l’infirmerie. Le dôme géodésique, fabriqué
              et installé sur notre camp sera le meilleur endroit pour rester au
              calme, lire, discuter, échanger, débattre et faire des jeux de
              société. Le camp est équipé de toilettes sèches et nous aurons des
              douches chaudes (même en absence de soleil !).
            </p>
          </div>
        </article>

        <article>
          <div>
            <h3>Les activités</h3>
            <p>
              Cet endroit offre de nombreuses possibilités comme notamment la
              découverte de savoirs faire artisanaux (forge, boulangerie...). Tu
              pourras également mettre les mains dans la terre en participant
              aux cultures collectives ou encore apprendre à réparer des vélos,
              organiser et faire vivre un endroit de zone libre de vêtements !
              Sur ce terrain bordé de chênes centenaires, nous aurons des temps
              dédiés aux préparatifs de La Grande Malice mais nous pourrons
              aussi partir explorer le territoire de la ZAD (Zone A Defendre)
              Avec des balades naturalistes, excursions en forêt... Mais aussi
              rester sur le camp pour jouer, lire, discuter, faire du sport
              (comme du tissu aérien) ou tout autre activité qui te tenterait.
            </p>
          </div>
          <img src={imgDescFesticolo3} alt="work" />
        </article>

        <article>
          <img src={imgDescFesticolo4} alt="work" />
          <div>
            <h3>Le prix</h3>
            <p>
              Ce séjour n’est pas une colonie classique, les animateur·ices et
              organisateur·ices de La Grande Malice sont bénévoles. Nous voulons
              que chaque enfant qui le souhaite puisse participer à
              l’organisation de l’événement. C’est pourquoi nous fixerons une
              participation aux frais au cas par cas avec les familles des
              jeunes motivé.es.
            </p>
          </div>
        </article>

        <article>
          <img src={imgDescFesticolo5} alt="work" />
          <div>
            <h3>On a hâte</h3>
            <p>
              Nous restons disponibles pour toutes tes questions, auxquelles
              nous prendrons plaisir à répondre. C’est vrai, ça peut faire peur,
              c’est nouveau, ça change, mais rassure-toi pour nous aussi. Alors
              nous ferons équipe pour ensemble se rassurer, s’entourer, s’aider
              et puis quoi de mieux pour avoir plein de belles choses à raconter
              ! Notre seule attente envers toi, c’est ta motivation. Il est
              important pour nous d’avoir de faire équipe avec des personnes qui
              ont elle-même choisie de participer et de s’investir dans la
              festicolo ! Le reste ne sera qu’aventure et découverte, partage et
              plaisir de construire ensemble ! Lorsque le séjour sera complet,
              une liste d’attente sera mise en place.
            </p>
          </div>
        </article>
      </div>
      <Link to="/reservations" className="redirect">
        Comment s’inscrire ➡
      </Link>
    </div>
  )
}

export default Activites
