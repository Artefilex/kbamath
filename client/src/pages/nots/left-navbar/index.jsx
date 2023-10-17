import { NavLink } from "react-router-dom"
import { notsLinks } from "../../../routes/links"
export default function LefttBar () {
    return (
        <nav className="flex gap-2 bg-[color:var(--bg-primary)] flex-col h-screen">
         {
            notsLinks.map((not) => (
                <NavLink className="hover:bg-[color:var(--bg-secondary)] whitespace-nowrap  py-4 pr-9 pl-2 transition-colors" key={not.href} to={not.href}> {not.label} </NavLink>
            ))
         }
        </nav>
    )
}