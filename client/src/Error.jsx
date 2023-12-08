import ErrorPage from "./assests/image/error.svg"
function Error() {
  return <div className="w-full min-h-screen flex items-center justify-center flex-col">
    <div className="text-[2rem] font-bold" > Aradığınız Sayfa Bulunamadı  </div>
    <img src={ErrorPage} alt={"error"}  className="max-h-[30rem]"/>
  </div>;
}

export default Error;
