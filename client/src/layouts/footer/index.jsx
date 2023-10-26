import { Link } from "react-router-dom";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { getData } from "../../utils/blog";
import { useEffect, useState } from "react";
export default function Footer() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setBlogs(response[0]);
    };

    fetchData();
  }, []);
  console.log(blogs);

  const connect = {
    mail: "baris.tncdmr@gmail.com",
    tel: "0506-121-06-25",
  };
  return (
    <footer className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
      <main className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center tablet:items-start tablet:flex-row  justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
        <div className=" w-full justify-beetwen flex flex-col gap-2 text-[1.6rem]">
          <div>
            <p> Bize Ulaşın</p>
          </div>
          <div>
            <div className="flex items-center   gap-4 text-[1.3rem]">
              {" "}
              <BsTelephone /> {connect.tel}{" "}
            </div>
            <div className="flex items-center   gap-4 text-[1.3rem]">
              {" "}
              <SiGmail /> {connect.mail}{" "}
            </div>
            <Link
              to={"https://www.instagram.com/kbamatematik_/?hl=tr"}
              className="flex items-center  gap-4 text-[1.3rem]"
            >
              {" "}
              <BsInstagram /> Kba Matematik{" "}
            </Link>
            <Link
              to={"https://www.instagram.com/kbageometri/?hl=tr"}
              className="flex items-center  gap-4 text-[1.3rem]"
            >
              {" "}
              <BsInstagram /> Kba Geometri{" "}
            </Link>
          </div>
        </div>
        <div className=" w-full text-[1.3rem]">
          <h3 className="text-[1.6rem]"> Hızlı Ulaşım </h3>
          <nav>
            <Link to={"/hakkımızda"}> Hakkımızda </Link>
            <Link to={"/dersler"}> Özel Ders Programı </Link>
            <div className="w-full flex flex-col gap-4">
              {/* buraya ugrancak */}
              <Link to={"/bloglar"}> Diğer Bloglar </Link>
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex items-center justify-between gap-2"
                >  
                  <img src={blog.img || "https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg"} alt={blog.img || "blog.img"} className="w-full max-w-[5rem]" />
                  <div>
                    <h2>{blog.header} </h2>
                    <h4> {blog.subtitle}</h4>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </main>
      <span>birlikte yarınlara emin adımlarla </span>
    </footer>
  );
}
