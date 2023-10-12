import PropTypes from "prop-types"

export default function SectionMain ({children}){
    return(
        <section className="w-full pt-3">
            {children}
        </section>
    )

}

SectionMain.propTypes = {
    children: PropTypes.node
}
