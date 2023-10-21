export default function BlogHeader(){

    return (
        <header className="relative  mt-5 w-full flex gap-4 items-center justify-center min-h-[15rem]  overflow-hidden group rounded-md">
         <img src="https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg"   className="transition-transform transform-gpu group-hover:scale-110 rounded-md absolute z-[1] top-0 left-0 w-full h-full object-cover duration-500"  alt="" />   
         <h2 className="text-[10rem] blog-header blog-bg w-full text-center z-[2]">BLOG</h2>
        </header>
    )
}