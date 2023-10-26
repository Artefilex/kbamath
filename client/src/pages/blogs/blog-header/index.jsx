
import daktilo from "../../../assests/image/daktilo.jpg"
export default function BlogHeader(){
    return (
        <header className="relative  mt-5 w-full flex gap-4  justify-center min-h-[12rem]  overflow-hidden group rounded-md mb-12">
            <img src={daktilo} alt="ssss"  className="absolute top-0 left-0 object-cover  w-full h-full transition-transform transform-gpu group-hover:scale-[1.04] rounded-md  duration-500"/>
 
         <h2 className="text-[8rem] mobile:text-[10rem] blog-second-bg opacity-100  w-full text-center z-[2] hover:opacity-80 transition-all duration-300">BLOG</h2>
        </header>
    )
}