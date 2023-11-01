
import { memo } from "react";
import { Outlet } from "react-router-dom";

const HighSchool = memo( function  HighSchool  () {

  return (
    <main className="w-full flex">
    <Outlet/>
    </main>
  )
})

export default HighSchool