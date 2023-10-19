import PropTypes from "prop-types"
export default function HomeLessons({lesson}) {
   console.log(lesson)
  return <div> lessons</div>;
}

HomeLessons.propTypes = {
    lesson: PropTypes.object.isRequired
}