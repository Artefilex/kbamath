import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks"

export default function CardRightBox ({image ,header, descrp}) {
    const {theme}= useAppearance()

    return(
        <div className="w-full flex flex-col-reverse mobile:flex-row items-center ">
         <div className="flex-1">
            <h1> {header} </h1>
            <section> {descrp} </section>
         </div>
         <div className="w-[40%] ">
        <img src={image} alt="" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  />
        </div>
        </div>
    )

}

CardRightBox .propTypes={
   image: PropTypes.node ,
   header: PropTypes.string,
   descrp: PropTypes.string
}