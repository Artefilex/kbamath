import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <>
         <nav>
         <Link to={"/"}> Ana Sayfa </Link>
         <Link to={"/hakkımızda"}> Hakkımızda </Link>
         <Link to={"/hizmetler"}> Hizmetler</Link>
         <Link to={"/notlar"}> Notlar </Link>
         <Link to={"/iletişim"}> İletişim </Link>
         
        </nav>
        <nav>
        <Link to={"/admin"}> admin</Link>
        <Link to = {"/admin/nots"} > nots  </Link>
          <Link to = {"/admin/blogs"} > blogs  </Link>
         
        </nav>

        </>
    )
}