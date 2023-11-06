import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks"

export default function CardRightBox ({image ,header, descrp}) {
    const {theme}= useAppearance()

    return(
        <section className="flex w-full flex-col-reverse items-center mobile:flex-row gap-2 deskop:py-5 deskop:px-4 py-[2rem] overflow-hidden tablet:overflow-visible"  >
         <div className="flex w-full  flex-col px-2"  data-aos="fade-right">
            <h1 className="text-[1.5rem] font-bold mb-4"> {header} </h1>
            <p className="font-semibold"> {descrp} </p>
         </div>
         <div className="w-[40%] ">
        <img src={image} alt="" className={theme.name === "dark" ? "drop-shadow-dark" : "drop-shadow-light" }  data-aos="fade-left" />
        </div>
        </section>
    )

}

CardRightBox .propTypes={
   image: PropTypes.node ,
   header: PropTypes.string,
   descrp: PropTypes.string
}