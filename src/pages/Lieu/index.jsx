import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import LineSeparator from "../../components/LineSeparator"
import imgDescLieuStart from "../../assets/img/pictures/enfants_butte.jpg"
import imgDescLieu1 from "../../assets/img/pictures/hangar.jpg"
import imgDescLieu2 from "../../assets/img/pictures/dome_interieur.jpg"
import imgDescLieu3 from "../../assets/img/pictures/charpente_enfants.jpeg"
import imgDescLieu4 from "../../assets/img/pictures/boueux.jpg"
import imgInfoIcon from "../../assets/img/InfoIcon.png"
import imgDownFrise from "../../assets/img/DownFrise.png"

function Lieu() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Le Lieu" />
      <article id="lieu-start">
        <div>
          <p>
            La Grande Noé est un joli terrain de <b>2,5 hectares</b> bordé de
            chênes centenaires. Il se situe à <b>Treillières</b> (44119), au
            nord de Nantes. Le collectif y pose les pieds pour la première fois
            en <b>2021</b>, à cette époque c’était une friche entièrement
            recouverte de ronces !
            <br />
            <br />
            Depuis, le lieu a bien <b>évolué</b> et continue de grandir avec,
            par et pour les crapouilles qui s’y investissent.
          </p>
        </div>
        <img src={imgDescLieuStart} alt="work" />
      </article>

      <div className="notif">
        <img src={imgInfoIcon} alt="info" />

        <p>
          Il est possible de réserver tout ou partie du lieu pour des activités
          et événements qui sont en accord avec nos valeurs. En infrastructures
          nous avons : un dôme géodésique qui est un espace polyvalent de 40m
          carré, des toilettes sèches, des douches (au printemps/été), un espace
          bricolage abrité, une cuisine extérieure. Nous avons également du
          matériel à disposition : grand barnum, tentes, matériel de cuisine
          collective, tables, bancs, jeux, livres… En terme d’espaces verts,
          nous avons une petite prairie, un espace à l’ombre de chênes
          centenaires et un champ arboré avec un espace feu. Pour en discuter,
          n’hésitez pas à nous contacter.
        </p>
      </div>

      <LineSeparator />

      <div className="frise">
        <div id="lieu-2021">
          <h3>2 0 2 1</h3>
          <div>
            <p>
              En 2021, un <b>hangar</b> est construit pour permettre de stocker
              le matériel de l’association organisatrice de séjours de vacances{" "}
              <a href="https://www.labidouillerie.fr/">
                <nobr>La Bidouillerie</nobr>
              </a>
              . Cet été là, les premiers enfants sont accueillis sur le terrain,
              iels réalisent une <b>véritable cabane</b> (charpente, plancher)
              et une
              <b> yourte d’accueil</b> !.
            </p>
            <img src={imgDescLieu1} alt="work" />
          </div>
        </div>

        <div id="lieu-2022">
          <h3>2 0 2 2</h3>
          <div>
            <p>
              En <b>2022</b>, c’est la première étape de construction du{" "}
              <b>dôme géodésique </b>
              qui est réalisée : un plancher de 40m carré qui permet aux ados
              accueillis l’été de vivre de belles soirées de jeux, discussions
              et fous rires.
              <br />
              <br />
              Ces dernièr-es réalisent l’escalier qui mène au dôme ainsi qu’un
              meuble de salle de bain extérieure.
            </p>
            <img src={imgDescLieu2} alt="work" />
          </div>
        </div>

        <div id="lieu-2023">
          <h3>2 0 2 3</h3>
          <div>
            <p>
              En <b>2023</b>, le dôme géodésique de <b>40m²</b> s’élève sur le
              terrain, il devient{" "}
              <b>bibliothèque, ludothèque, dortoir et même salle de couture</b>{" "}
              ! Il devient le lieu préféré des enfants, suivi de très près par
              le dernier arrivé : le <b>trampoline</b> !
              <br />
              <br />
              Lors des colos de l’été, les enfants construisent la charpente et
              le plancher d’une <b>cuisine extérieure</b>, une belle réalisation
              collective !
            </p>
            <img src={imgDescLieu3} alt="work" />
          </div>
        </div>

        <div id="lieu-2024">
          <h3>2 0 2 4</h3>
          <div>
            <p>
              En <b>2024</b> c’est un bloc de <b>toilettes sèches</b> dont 1 PMR
              en terre crue qui est en construction.
              <br />
              <br />
              Celui-ci est réalisé en plusieurs phases : les premières à l’hiver
              avec des ami-es maçon-nes tandis que celles d’après se feront au
              printemps, avec des enfants !
            </p>
            <img src={imgDescLieu4} alt="work" />
          </div>
        </div>
        <img src={imgDownFrise} alt="work" />
      </div>
    </div>
  )
}

export default Lieu
