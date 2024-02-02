import "./index.css"
import PropTypes from "prop-types"
import waterlilly from "../../assets/img/WaterLilly.png"
import underline from "../../assets/img/Underline.png"

function WaterlillyTitle({ title }) {
  return (
    <div className="waterlillyTitle">
      <div className="waterlillies">
        <img src={waterlilly} alt="Water Lilly" />
        <img src={waterlilly} alt="Water Lilly" />
      </div>
      <img src={underline} alt="Underline" />
      <h2>{title}</h2>
    </div>
  )
}

WaterlillyTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default WaterlillyTitle
