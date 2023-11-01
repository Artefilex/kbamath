import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks"

export default function CardLeftBox ({image ,header, descrp}) {
const {theme}= useAppearance()

console.log(theme.name)
    return(
        <div className="w-full flex-col flex mobile:flex-row items-center">
        <div className="w-[40%] ">
        <img src={image} alt="" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  />
        </div>
         <div className="flex-1">
            <h1> {header} </h1>
            <section> {descrp} </section>
         </div>
        </div>
    )

}

CardLeftBox.propTypes={
   image: PropTypes.node ,
   header: PropTypes.string,
   descrp: PropTypes.string
}