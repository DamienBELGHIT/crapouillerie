import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import LineSeparator from "../../components/LineSeparator"
import imgDescLieu1 from "../../assets/img/pictures/Dog.png"
import imgDescLieu2 from "../../assets/img/pictures/BuildDoor.jpg"
import imgDescLieu3 from "../../assets/img/pictures/Dome2.jpg"
import imgDescLieu4 from "../../assets/img/pictures/Tools.jpg"

function Lieu() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Le Lieu" />
      <article id="lieu-2021">
        <img src={imgDescLieu1} alt="work" />
        <div>
          <h3>2021</h3>
          <p>
            La Grande Noé est un joli terrain de <b>2,5 hectares</b> bordé de
            chênes centenaires. Il se situe à <b>Treillières</b> (44119), au
            nord de Nantes. Le collectif y pose les pieds pour la première fois
            en <b>2021</b>, à cette époque c’était une friche entièrement
            recouverte de ronces !
            <br />
            <br />
            Depuis, le lieu a bien <b>évolué</b> et continue de grandir avec,
            par et pour les crapouilles qui s’y investissent. En 2021, un{" "}
            <b>hangar</b> est construit pour permettre de stocker le matériel de
            l’association organisatrice de séjours de vacances{" "}
            <a href="https://www.labidouillerie.fr/">
              <nobr>La Bidouillerie</nobr>
            </a>
            . Cet été là, les premiers enfants sont accueillis sur le terrain,
            iels réalisent une <b>véritable cabane</b> (charpente, plancher) et
            une
            <b> yourte d’accueil</b> !.
          </p>
        </div>
      </article>

      <LineSeparator />

      <article id="lieu-2022">
        <div>
          <h3>2022</h3>
          <p>
            En <b>2022</b>, c’est la première étape de construction du{" "}
            <b>dôme géodésique </b>
            qui est réalisée : un plancher de 40m carré qui permet aux ados
            accueillis l’été de vivre de belles soirées de jeux, discussions et
            fous rires.
            <br />
            <br />
            Ces dernièr-es réalisent l’escalier qui mène au dôme ainsi qu’un
            meuble de salle de bain extérieure.
          </p>
        </div>
        <img src={imgDescLieu2} alt="work" />
      </article>

      <LineSeparator />

      <article id="lieu-2023">
        <img src={imgDescLieu3} alt="work" />
        <div>
          <h3>2023</h3>
          <p>
            En <b>2023</b>, le dôme géodésique de <b>40m²</b> s’élève sur le
            terrain, il devient{" "}
            <b>bibliothèque, ludothèque, dortoir et même salle de couture</b> !
            Il devient le lieu préféré des enfants, suivi de très près par le
            dernier arrivé : le <b>trampoline</b> !
            <br />
            <br />
            Lors des colos de l’été, les enfants construisent la charpente et le
            plancher d’une <b>cuisine extérieure</b>, une belle réalisation
            collective !
          </p>
        </div>
      </article>

      <LineSeparator />

      <article id="lieu-2024">
        <div>
          <h3>2024</h3>
          <p>
            En <b>2024</b> c’est un bloc de <b>toilettes sèches</b> dont 1 PMR
            en terre crue qui est en construction.
            <br />
            <br />
            Celui est réalisé en plusieurs phases : les premières à l’hiver avec
            des ami-es maçon-nes tandis que celles d’après se feront au
            printemps, avec des enfants !
          </p>
        </div>
        <img src={imgDescLieu4} alt="work" />
      </article>
    </div>
  )
}

export default Lieu
