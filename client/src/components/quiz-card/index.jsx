import PropTypes from "prop-types"
export default function QuizCard ({count , text}) {
 return(
    <div className=" relative group  flex items-center justify-between">
            <div className="w-[2rem] h-[2rem] absolute  px-[1rem] py-[1rem] flex items-center justify-center  border-4 font-bold rounded-full opacity-30 group-hover:opacity-100 transition-opacity "> {count} </div> 
            <div className="w-full ml-16">
                {text}
            </div>
          </div>
 )
}


QuizCard.propTypes = {
    count : PropTypes.number,
    text: PropTypes.string
}