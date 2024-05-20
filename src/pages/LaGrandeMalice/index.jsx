import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgDescFesticolo1 from "../../assets/img/pictures/charpente_enfants.jpeg"
import imgDescFesticolo2 from "../../assets/img/pictures/grande_prairie_marie_sourit.jpg"
import imgAffiche from "../../assets/img/pictures/afficheGrandeMalice.png"
import LineSeparator from "../../components/LineSeparator"

function LaGrandeMalice() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="La Grande Malice  " />
      <div className="festicoloSection">
        <article id="festicolo-bio">
          <p>
            Bienvenue à la Grande Malice ! Ce festival aura lieu pour la
            première fois le <b>Dimanche 25 août 2024</b> à La Grande Noé,
            Treillières.
            <br />
            Son originalité ? Il est organisé en grande partie par des{" "}
            <b>enfants et ados</b> ! Ces jeunes se retrouvent à la “Festicolo”,
            du <b>17 au 28 août 2024</b> sur le lieu du site, pour organiser
            l’événement : monter la scène, créer de la décoration, planifier la
            venue des intervenant·es (artistes, cantines...), communiquer,
            inventer une carte de cocktail et laisser libre court à leur
            <b> créativité </b> !
          </p>
          <img src={imgAffiche} alt="work" />
        </article>
        <LineSeparator />
        <article id="festicolo-sejour">
          <div>
            <h3>Son programme ?</h3>
            <p>
              La Grande Malice ouvre ses portes de <b>13h à 22h</b> et vous
              invite à déambuler parmis ses stands, à déguster glaces, frites ou
              encore pizza et bien sûr, à assister à ces différents{" "}
              <b>spectacles et concerts</b>.
              <br />
              <h4>-Spectacles et concerts-</h4>
              <b>
                14h30 - 15h30 = Talya- Cie La Houpette Spectacle de théâtre tout
                public
              </b>{" "}
              <br />
              &quot;Je m’appelle Talya et je fais la promesse de devenir, le
              temps qu’il faudra, la remplaçante des nuages magiques.&quot; Huis
              clos à deux personnages, entre science fiction et conte pour
              enfant.
              <br />{" "}
              <a href="https://www.youtube.com/watch?v=iHlb0w6sOwo&list=PLwEh6Id1ZoXdi9749ibTQMr4TXahv82fj">
                Découvrir le teaser du spectacle ICI !
              </a>
              <br />
              <br />
              <b>16H30 - 17H30 = Spectacle en cours de programmation</b>
              <br />
              <br />
              <b>18H30 - 19H30 = Concert - Le groupe Dragon</b>
              <br />
              Dragon, c’est un groupe de jeunes ados de Vigneux-de-Bretagne
              passionnés par le rock ! Il est composé de: Evan au chant, au
              synthé et à la guitare, Clément à la batterie et au choeur, puis
              Amandine à la basse et au chœur
              <br />
              <b>20H30 - 21H30 = Radio Tue-tête</b>
              <br />
              Deux voix complices, une guitare sèche un peu groove, une flûte
              assez jazzy et une percussion venue du Brésil qui envoie quand
              même un peu de boom... Radio tue-tête c’est un spectacle de
              chansons dont tu connais toutes les paroles mais joué autrement.
              Unis par leur amitié, inspirés par leur adolescence, en lutte
              contre le snobisme musical, le sexisme et la fin du monde. Les
              deux musicien·nes partagent, dans une joie communicative, leur
              envie de donner, de rassembler.
              <br />
              <a href="https://www.youtube.com/watch?v=xQwTKqfjA1o">
                Découvrir un de leur pétillant clip !
              </a>
              <h4>-Animations & espaces d’activités-</h4>
              <ul>
                <li>Grand jeu “comme en colo”</li>
                <li>Ludothèque</li>
                <li>Bibliothèque</li>
                <li>Fils & aiguilles</li>
                <li>Petite enfance</li>
                <li>Bricolage</li>
                <li>Jeux en bois et jeux extérieurs</li>
                <li>Zone de gratuité (dons et trocs)</li>
                <li>Et plus encore à découvrir sur place !</li>
              </ul>
              <h4>-Espaces de restauration-</h4>
              <ul>
                <li>Buvette</li>
                <li>Caravane-bar des enfants</li>
                <li>
                  A manger tout au long de l’après-midi : frites, churros,
                  gâteaux, glaces
                </li>
                <li>A partir de 18h : pizzas réalisées et cuites sur place</li>
              </ul>
            </p>
          </div>
          <img src={imgDescFesticolo1} alt="work" />
        </article>
        <LineSeparator />

        <article id="festicolo-lieu">
          <img src={imgDescFesticolo2} alt="work" />
          <div>
            <h3>Informations pratiques</h3>
            <p>
              <h4>Le lieu </h4>
              <b>La Grande Noé</b> est un joli terrain de 2,5 hectares bordé de
              chênes centenaires, situé à <b>Treillières</b>. L’association La
              Crapouillerie y développe un lieu d’animation et d’accueil du
              public depuis <b>2021</b>. Nous y accueillons des séjours de
              vacances (de la Bidouillerie), des chantiers écoles, formations,
              réunions d’association, jeux de rôle grandeur nature, et pour la
              première fois un <b>festival ouvert au grand public</b>.
              <br />
              <br />
              Comme la Grande Malice se déroulera sur le temps d’une <b>
                colo
              </b>{" "}
              et qu’il s’agit d’un événement familial, des règles spécifiques à{" "}
              <b>l’Accueil Collectif de Mineurs</b> seront mises en place (comme
              une interdiction de fumer en dehors de la zone dédiée). Elles
              seront présentées à l’accueil du festival.
              <br />
              <br />
              Un <b>parking</b> sera mis en place à proximité immédiate du site.
              <br />
              <br />
              Pour un accueil de qualité, nous mettrons en place une{" "}
              <b>jauge de personnes</b> afin de ne pas dépasser notre capacité
              d’accueil sur place.
              <br />
              Merci de laisser vos chiens à la maison.
              <h4>Tarifs</h4>
              L’entrée du festival est à <b>prix libre</b> (des prix indicatifs
              et un tableau explicatif du budget de l’événement seront affichés
              à l’accueil).
              <br />
              La nourriture et les boissons seront à <b>prix fixe</b>, il y aura
              une monnaie spéciale pour la Grande Malice (<b>les Crap’s</b>)
              avec un stand pour faire les échanges.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
export default LaGrandeMalice
