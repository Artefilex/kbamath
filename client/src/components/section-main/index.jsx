import PropTypes from "prop-types"

export default function SectionMain ({children}){
    
    return(
        <section className="w-full mt-6 flex items-start  flex-col px-2  py-2 h-screen gap-2 bg-[color:var(--bg-secondary)] ">
            {children}
        </section>
    )

}

SectionMain.propTypes = {
    children: PropTypes.node
}
