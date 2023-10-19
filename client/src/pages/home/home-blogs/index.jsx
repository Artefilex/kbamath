
import PropTypes from "prop-types"
export default function HomeBlog({blog}) {
  console.log(blog)
  return <div> 
    blogs
  </div>;
}

HomeBlog.propTypes = {
    blog: PropTypes.object.isRequired
}

