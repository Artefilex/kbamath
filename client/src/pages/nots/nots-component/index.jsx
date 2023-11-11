import PropTypes from "prop-types"

export default function NotsMain ({children}){
    
    return(
        <section className="w-full mt-6 flex items-start  flex-col px-2  py-2 gap-2 ">
            {children}
        </section>
    )

}

NotsMain.propTypes = {
    children: PropTypes.node
}
