import { Link } from "react-router-dom";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { getData } from "../../utils/blog";
import { useEffect, useState } from "react";
import MainSvg from "../../assests/image/main.svg";
export default function Footer() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setBlogs(response[0]);
    };

    fetchData();
  }, []);


  const connect = {
    mail: "baris.tncdmr@gmail.com",
    tel: "0506-121-06-25",
  };
  return (
    <footer className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
      <main className="w-full gap-4 flex-col flex  items-center tablet:items-start  tablet:flex-row justify-around my-4 relative max-w-[100rem] ">
        <div className="w-full max-w-[20rem] flex justify-start">
       
           <img  src={MainSvg} alt="sss" className=" bg-linear text-transparent text-blog-second-bg bg-[url:('../../assests/image/main.svg')]" /> 
        </div>

        <div className="flex flex-col w-full xtablet:flex-row max-w-[50rem] px-10 tablet:px-0">  
          <div className=" w-full justify-beetwen  flex flex-col gap-2">
            <div className="text-[1.6rem]">
              <p> Bize Ulaşın</p>
            </div>
            <div>
              <div className="flex items-center   gap-4 ">
                {" "}
                <BsTelephone /> {connect.tel}{" "}
              </div>
              <div className="flex items-center truncate w-full gap-4 ">
                {" "}
                <SiGmail /> {connect.mail}{" "}
              </div>
              <Link
                to={"https://www.instagram.com/kbamatematik_/?hl=tr"}
                className="flex items-center  gap-4"
              >
                {" "}
                <BsInstagram /> Kba Matematik{" "}
              </Link>
              <Link
                to={"https://www.instagram.com/kbageometri/?hl=tr"}
                className="flex items-center  gap-4"
              >
                {" "}
                <BsInstagram /> Kba Geometri{" "}
              </Link>
            </div>
          </div>

          <div className=" w-full text-[1rem]  justify-beetwen flex flex-col gap-2 ">
            <h3 className="text-[1.6rem]"> Hızlı Ulaşım </h3>
            <nav className="flex flex-col max-w-[20rem]">
              <Link to={"/hakkımızda"}> Hakkımızda </Link>
              <Link to={"/dersler"}> Özel Ders Programı </Link>
              <div className="w-full  flex flex-col gap-4">
                {/* buraya ugrancak */}
                <Link to={"/bloglar"}> Diğer Bloglar </Link>
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex items-start gap-10"
                  >
                    <img
                      src={
                        blog.img ||
                        "https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg"
                      }
                      alt={blog.img || "blog.img"}
                      className="w-full max-w-[5rem]"
                    />
                
                     <div className="truncate max-w-[10rem]">
                     <p className="truncate ">{blog.header} </p>
                      <p className="truncate"> {blog.subtitle}</p>
                     </div>
                   
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </main>
      <span>birlikte yarınlara emin adımlarla </span>
    </footer>
  );
}
