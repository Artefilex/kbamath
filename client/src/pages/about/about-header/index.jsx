export default function AboutHeader () {
    return (
        <header className=" py-2 w-full flex-col min-h-[15rem] flex items-center gap-4 px-2 mobile:flex-row mobile:items-start transition-all duration-300">
        <div className="flex items-center justify-cente w-full min-h-[10rem] ">
         headerphoto       <img src="../../../assests/kba2.png" alt="" />
        </div>
        <div className="flex items-center justify-center w-full  ">
          <div className="flex flex-col ">
            <h1 className="font-bold text-[2rem] ">Kaan Bekir Akbulut </h1>
            <h2 className="font-semibold text-[1.5rem]">Lise Matematik </h2>
          </div>
        </div>
      </header>
    )
}