import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks"

export default function CardLeftBox ({image ,header, descrp}) {
const {theme}= useAppearance()

// console.log(theme.name)
    return(
        <section className="flex w-full flex-col mobile:items-center mobile:flex-row items-center justify-center gap-2 deskop:py-5 deskop:px-4 my-[2rem]" > 
        <div className="w-[50%] " data-aos="fade-right">
        <img src={image} alt="" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  />
        </div>
         <div className="flex w-full  flex-col" data-aos="fade-left">
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