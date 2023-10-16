import PropTypes from "prop-types"

export default function SectionMain ({children}){
    return(
        <section className="w-full pt-6">
            {children}
        </section>
    )

}

SectionMain.propTypes = {
    children: PropTypes.node
}
