import PropTypes from "prop-types"
export default function HomeNots({nots}) {
console.log(nots)
  return <div> nots </div>;
}

HomeNots.propTypes = {
    nots: PropTypes.object.isRequired
}