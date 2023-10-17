import PropTypes from "prop-types"

export default function NotsMain ({children}){
    
    return(
        <section className="w-full mt-6 flex items-start  flex-col px-2  py-2 h-screen gap-2 bg-[color:var(--bg-secondary)] ">
            {children}
        </section>
    )

}

NotsMain.propTypes = {
    children: PropTypes.node
}
