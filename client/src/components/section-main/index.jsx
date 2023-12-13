import PropTypes from "prop-types"

export default function SectionMain ({children}){
    
    return(
        <section className="w-full mt-6 flex items-center  flex-col px-2  gap-2   ">
            {children}
        </section>
    )

}

SectionMain.propTypes = {
    children: PropTypes.node
}
