import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <>
         <Link to={"/"}> Ana Sayfa </Link>
         <Link to={"/hakkımızda"}> Hakkımızda </Link>
         <Link to={"/hizmetler"}> Hizmetler</Link>
         <Link to={"/notlar"}> Notlar </Link>
         <Link to={"/iletişim"}> İletişim </Link>
        </>
    )
}