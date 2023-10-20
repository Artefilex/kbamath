import PropTypes from "prop-types";
import  {Link} from "react-router-dom"
export default function HomeLessons({ lesson }) {
  console.log(lesson);
  console.log()
  return (
    <div className="flex items-center justify-center bg-[color:var(--c-subbase)] min-w-[10rem] min-h-[10rem]">
    <Link to={`/dersler/bakma`}>
    {lesson.skillName} 
  </Link> 
  </div>
  )
 
}

HomeLessons.propTypes = {
  lesson: PropTypes.object.isRequired,
};
