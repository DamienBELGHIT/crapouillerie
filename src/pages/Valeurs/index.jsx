import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import LineSeparator from "../../components/LineSeparator"
import imgDescAutonomie from "../../assets/img/pictures/CarryWood.png"
import imgDescEntraide from "../../assets/img/pictures/Hangar2.jpg"
import imgDescConfiance from "../../assets/img/pictures/Roof.jpg"
import imgDescEcologie from "../../assets/img/pictures/Night.jpg"
import imgDescMixite from "../../assets/img/pictures/Dome.jpg"

function Valeurs() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Nos Valeurs" />
      <div>
        <article id="valeur-autonomie">
          <div>
            <h3> 1 - L’autonomie et l’autogestion</h3>
            <p>
              Nous pensons qu’il est important de nous{" "}
              <b>réapproprier nos quotidiens</b>, que ce soit par notre{" "}
              <b>implication dans les processus de subsistance</b> (se nourrir,
              se loger, se vêtir…) que dans ceux de <b>décision collective</b>.
              <br />
              <br />
              Pour y contribuer nous proposons des{" "}
              <b>expériences de vie collective </b>
              qui donnent à chacun.e la sensation que sa <b>parole</b> a de la
              valeur, qu’iels peuvent réellement <b>agir dans le groupe</b>.
              Nous expérimentons différentes manières de
              <b>
                créer des règles de vie collective, gérer les conflits inhérents
                à la vie de groupe, choisir les activités et leur mise en oeuvre
              </b>
              …
            </p>
          </div>
          <img src={imgDescAutonomie} alt="work" />
        </article>

        <LineSeparator />

        <article id="valeur-entraide">
          <img src={imgDescEntraide} alt="work" />
          <div>
            <h3> 2 - L’entraide et la cooperation </h3>
            <p>
              Reprendre du pouvoir sur nos quotidiens, c’est aussi rendre plus
              visible, plus sensible <b>l’interdépendance des membres</b> d’un
              collectif. C’est réussir à créer des{" "}
              <b>systèmes fonctionnels d’entraide</b> où chacun-e s’implique
              selon ses moyens et reçoit selon ses besoins.
              <br />
              <br />
              Cette réussite n’est jamais acquise dans le sens où elle est en
              perpétuelle mouvement, elle nécessite de la <b>coopération</b> et
              une prise en considération des{" "}
              <b>besoins matériels, psychologiques et émotionnels</b> de chaque
              personne du groupe tout en assurant ceux du collectif.
              <br />
              <br />
              Apprendre à vivre et faire ensemble, c’est aussi être attentif-ves
              aux <b>dynamiques de groupe</b> et vigilant-es sur les{" "}
              <b>violences systémiques</b> qui s’y jouent. C’est créer des
              collectifs solides où chacun-e se sent fort-e, reconnue et
              valorisé-e.
            </p>
          </div>
        </article>

        <LineSeparator />

        <article id="valeur-confiance">
          <div>
            <h3> 3 - La confiance en soi et l’audace </h3>
            <p>
              A la Crapouillerie, nous pensons que les enfants sont capables de
              grandes choses si on leur en donne les moyens et surtout de la
              <b> confiance</b>. Nous faisons donc le choix d’un{" "}
              <b>taux d’encadrement important</b> (1 adulte pour 4 enfants) pour
              les accompagner au mieux et pouvoir individualiser cet
              accompagnement au besoin.
              <br />
              <br />
              Nous leur proposons également différents
              <b> projets collectifs ambitieux</b> mais réalisables (construire
              une cuisine extérieure avec charpente et plancher ; participer à
              la réalisation d’un festival ouvert au public…) afin qu’iels
              puissent goûter au{" "}
              <b>dépassement de soi et à la réalisation collective</b>. Face aux
              défis sociétaux auxquels nous devons toutes et tous faire face,
              nous pensons que la confiance en soi et en l’autre est un élément
              nécessaire pour faire preuve d’<b>audace</b> et ainsi inventer de{" "}
              <b>nouvelles manières de vivre</b>.
            </p>
          </div>
          <img src={imgDescConfiance} alt="work" />
        </article>

        <LineSeparator />

        <article id="valeur-ecologie">
          <img src={imgDescEcologie} alt="work" />
          <div>
            <h3>4 - Ancrage territorial et ecologie</h3>
            <p>
              Depuis plusieurs décennies, le système capitaliste et l’évolution
              des modes de vie et de travail ont <b>déconnecté</b> peu à peu les
              humains de leur environnement, ont{" "}
              <b>fragilisé nos relations de proximité</b> ainsi que nos liens
              avec <b>la faune et la flore</b> qui nous entourent.
              <br />
              <br />A la Crapouillerie, nous souhaitons{" "}
              <b>réaffirmer l’importance </b>
              de ces liens et les faire vivre à notre échelle. Pour cela, nous
              développons notre <b>ancrage territorial</b> en coopérant avec des
              maraîcher-es du coin, des artisan-nes, des associations (Nous qui
              Poussent, A4), des institutions publiques.
              <br />
              <br />
              Nous nous attachons également à <b> préserver le bocage</b> sur
              lequel est implanté notre lieu d’animation.{" "}
              <b>Les structures construites sont légères</b> (peu d’ancrages) et
              notre consommation (nourriture locale et biologique, produits
              d’hygiène naturels, revalorisation des matériaux de
              construction..) est pensée pour produire l’
              <b>impact le plus faible</b> sur notre sol, air et eau.
              <br />
              <br />
              L’aménagement du terrain est également pensé pour une réelle
              <b> cohabitation</b> entre humains et autres animaux, en laissant
              des espaces sauvages par exemple. Nous projetons également de
              reconstruire (autoconstruction) sur plusieurs années la maison
              auparavant existante à la Grande Noé et de la convertir en un
              <b> bâtiment d’accueil de public écologique et low-tech</b>.
            </p>
          </div>
        </article>

        <LineSeparator />

        <article id="valeur-mixite">
          <div>
            <h3>5- L’inclusion et la mixite</h3>
            <p>
              La Grande Noé est un lieu qui propose des activités{" "}
              <b>accessibles</b> à tous et toutes,{" "}
              <b>gratuites ou à prix libre</b> (chantiers écoles, festivals,
              ateliers…). Pour ce faire, la gestion de l’association,
              l’organisation des événements et la construction des structures
              d’accueil repose uniquement sur de l’engagement <b>bénévole</b>.
              <br />
              <br />
              Interculturalité, Mixité sociale, intergénérationalité PMR Lien
              contre les oppressions (sexistes, spécistes, LGBTQ+ phobes,
              racistes…)
            </p>
          </div>
          <img src={imgDescMixite} alt="work" />
        </article>
      </div>
    </div>
  )
}

export default Valeurs
