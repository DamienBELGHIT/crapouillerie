import "./index.css"
import WaterlillyTitle from "../../components/WaterlillyTitle"
import imgReservation from "../../assets/img/pictures/tente_nuit.jpg"

function Reservations() {
  return (
    <div id="main-section">
      <WaterlillyTitle title="Reservations" />
      <div className="reservationSection">
        <div>
          Pour toute question ou demande de réservation (du lieu ou des
          activités), merci de nous contacter par mail à{" "}
          <b>
            <span>
              associationlacrap
              <span className="blockspam" aria-hidden="true">
                PLEASE GO AWAY!
              </span>
              ouillerie@
              <span className="blockspam" aria-hidden="true">
                PLEASE GO AWAY!
              </span>
              gmail.com
            </span>
          </b>{" "}
          ou par téléphone au <b>06 68 84 69 23</b>.
        </div>
        <img src={imgReservation} alt="Logo" />
      </div>
    </div>
  )
}

export default Reservations
