import PropTypes from "prop-types";
import { memo } from "react";
const HomeNots = memo(function HomeNots({ nots }) {

  return <div> {nots} </div>;
})
HomeNots.propTypes = {
  nots: PropTypes.object
};
export default HomeNots