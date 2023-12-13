import { useEffect, useState } from "react";
import SectionMain from "../../components/section-main";
import { getAllItems } from "../../servises/admin";
import SuperAdmin from "../../helpers/is-super-admin";
import AdminHeader from "../../assests/image/admin.svg";
import AdminActivityBox from "../../components/admin-activity-box";
import { useAppearance } from "../../store/appearance/hooks";
export default function AdminMain() {
  const [admin, setAdmin] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [educations, setEducations] = useState([]);
  const [nots, setNots] = useState([]);
  const [quizs, setQuizs] = useState([]);
  const { filtered } = SuperAdmin();
  const { theme } = useAppearance();
  useEffect(() => {
    const fetchAdmin = async () => {
      const getUser = await getAllItems("users");
      const logUser = await JSON.parse(localStorage.getItem("userLogin"));
      const response = getUser.find((user) => user.email === logUser.email);
      const getBlog = await getAllItems("blogs");
      const usersBlog = getBlog.filter(
        (blogs) => blogs.author === logUser.username
      );

      setBlogs(usersBlog);
      setAdmin(response);
    };
    fetchAdmin();
  }, []);
  useEffect(() => {
    const fetcData = async () => {
      const getEducations = await getAllItems("education");
      const getNots = await getAllItems("nots");
      const getQuizs = await getAllItems("quizs");
      setEducations(getEducations);
      setNots(getNots);
      setQuizs(getQuizs);
    };
    fetcData();
  }, []);

  return (
    <SectionMain>
      <header
        className={`${
          theme.name === "light" ? "text-black/70" : "text-white/80"
        } w-[98%] flex items-center h-[10rem] justify-around tablet:h-[12rem] laptop:h-[16rem] deskop:h-[18rem] bg-slate-800/25  rounded-md relative -top-4 `}
      >
        <img src={AdminHeader} alt="header" className="w-full h-full " />
        <div className="w-full deskop:text-[4rem] laptop:text-[3rem] tablet:text-[2.5rem] capitalize font-bold ">
          Hoş Geldin {admin?.username}{" "}
        </div>
      </header>
      <h2
        className={`w-full font-extrabold text-center text-[3rem] ${
          theme.name === "light" ? "text-black/80" : "text-white/80"
        }`}
      >
        Faaliyet Raporu
      </h2>
      <main>
        {filtered ? (
          <div
            className={`${
              theme.name === "light" ? "text-black/70" : "text-white/80"
            } py-2 grid content-center  justify-items-center  grid-rows-1 grid-cols-1  tablet:grid-rows-2 tablet:grid-cols-2 w-full gap-3  deskop:gap-6  deskop:grid-rows-1 deskop:grid-cols-4`}
          >
            <AdminActivityBox
              header={"Blog Yazdın "}
              count={blogs?.length}
              path="blogs"
            />
            <AdminActivityBox
              header={"Özel Ders Oluşturdun "}
              count={educations?.length}
              path="educations"
            />
            <AdminActivityBox
              header={"  Not çıkardın "}
              count={nots?.length}
              path="nots"
            />
            <AdminActivityBox
              header={" Sınav Oluşturdun "}
              count={quizs?.length}
              path="quizs"
            />
          </div>
        ) : (
          <div
            className={`${
              theme.name === "light" ? "text-black/70" : "text-white/80"
            } py-2 grid content-center  justify-items-center  grid-rows-1 grid-cols-1  tablet:grid-rows-2 tablet:grid-cols-2 w-full gap-3  deskop:gap-6  deskop:grid-rows-1 deskop:grid-cols-4`}
          >
            <AdminActivityBox
              header={"Blog Yazdın "}
              count={blogs?.length}
              path="blogs"
            />
          </div>
        )}
      </main>
    </SectionMain>
  );
}
