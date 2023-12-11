import { useEffect, useState } from "react";
import SectionMain from "../../components/section-main";
import { getAllItems } from "../../servises/admin";
import SuperAdmin from "../../helpers/is-super-admin";

export default function AdminMain() {
  const [admin, setAdmin] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [educations, setEducations] = useState(null);
  const [nots, setNots] = useState(null);
  const [quizs, setQuizs] = useState(null);
  const { filtered } = SuperAdmin();
  useEffect(() => {
    const fetchAdmin = async () => {
      const getUser = await getAllItems("users");

      const logUser = await JSON.parse(localStorage.getItem("userLogin"));
      const response = getUser.find((user) => user.email === logUser.email);
      const getBlog = await getAllItems("blogs");
      const usersBlog = getBlog.filter((blogs) => blogs.author === logUser.username) 
  
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
      <header>Hoş Geldin {admin?.username}</header>
      <main>{filtered ? <div>
        <h2>Şimdiye Kadar</h2>
        <div>
            Blog Yazdın 
            {blogs?.length}
        </div>
      </div> : <div> baba gitti</div>}</main>
    </SectionMain>
  );
}
