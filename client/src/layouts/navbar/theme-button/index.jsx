import { useAppearance } from "../../../store/appearance/hooks";
import { setTheme } from "../../../store/appearance/action";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
export default function ThemeButton(){
    const { theme } = useAppearance(); 
    return (
      <>
         {theme?.name === "dark" ? (
            <button type="button" className="h-9 w-9 my-2   rounded-full hover:bg-[color:var(--c-subbase)] flex items-center justify-center "
              onClick={() => {
                setTheme({
                  name: "light",
                  bgPrimary: "#fff",
                  bgSecondary: "#f7f7f7",
                  boxShadow:
                    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                  base: "#000",
                  subbase: "#c6cacd",
                 btnColor: "#ffff"
                });
              }}
            >    
            <BsSun/>         
            </button>
          ) : (
            <button type="button" className="h-9 w-9  my-2 rounded-full hover:bg-[color:var(--c-subbase)] flex items-center justify-center "
              onClick={() => {
                setTheme({
                  name: "dark",
                  bgPrimary: "#16181c",
                  bgSecondary: "#212327",
                  boxShadow:
                    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                  base: "#e7e9ea",
                  subbase: "#71767b",
                  btnColor: "#000"
                });
              }}
            > 
              <MdOutlineDarkMode />
            </button>
          )}
      
      </>
    )
}