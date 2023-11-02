import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks"

export default function CardLeftBox ({image ,header, descrp}) {
const {theme}= useAppearance()

// console.log(theme.name)
    return(
        <section className="flex w-full flex-col mobile:items-center mobile:flex-row gap-2 deskop:py-5 deskop:px-4" data-aos="fade-up" data-aos-anchor-placement="center-center"> 
        <div className="w-[40%] " data-aos="fade-left">
        <img src={image} alt="" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  />
        </div>
         <div className="flex w-full  flex-col" data-aos="fade-rightyarn add react-awesome-slider">
            <h1 className="text-[1.5rem] font-bold mb-4"> {header} </h1>
            <p className="font-semibold"> {descrp} </p>
         </div>
        </section>
    )

}

CardLeftBox.propTypes={
   image: PropTypes.node ,
   header: PropTypes.string,
   descrp: PropTypes.string
}