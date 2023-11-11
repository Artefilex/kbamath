import PropTypes  from "prop-types";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

export default function Slider ({setInt , children } ) {
 const AutoplaySlider = withAutoplay(AwesomeSlider);
return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={setInt}
    bullets={false}
    organicArrows={false}
  >
    {children}
    </AutoplaySlider>
)

}

Slider.propTypes = {
    setInt : PropTypes.number,
    children: PropTypes.node
}