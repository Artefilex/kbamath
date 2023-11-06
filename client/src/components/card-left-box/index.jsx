import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks"

export default function CardLeftBox ({image ,header, descrp}) {
const {theme}= useAppearance()


    return(
        // <section className="flex w-full flex-col items-center mobile:flex-row  justify-center gap-2 deskop:py-5 deskop:px-4 py-[2rem]" > 
        // <div className="w-[50%] " data-aos="fade-right">
        // <img src={image} alt="" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  />
        // </div>
        //  <div className="flex w-full  flex-col" data-aos="fade-left">
        //     <h1 className="text-[1.5rem] font-bold mb-4"> {header} </h1>
        //     <p className="font-semibold"> {descrp} </p>
        //  </div>
        // </section>
        <section className="flex w-full flex-col items-center mobile:flex-row  justify-center gap-2 deskop:py-5 deskop:px-4 py-[2rem] overflow-hidden tablet:overflow-visible" > 
        <div className="w-[50%]"  data-aos="fade-right">
        <img src={image} alt="dd" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  />
        </div>
         <div className="flex flex-col px-2"  data-aos="fade-left">
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