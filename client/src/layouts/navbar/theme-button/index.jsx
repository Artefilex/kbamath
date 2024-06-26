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
                  bgPrimary: "#F1F1F1",
                  bgSecondary: "#ffffff",
                  boxShadow:
                    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                  base: "#000",
                  subbase: "#e5e5e5",
                 btnColor: "#ffffff",
                 blogText: "#ffffff"
                });
              }}
            >    
            <BsSun/>         
            </button>
          ) : (
            <button type="button" className="h-9 w-9  my-2 rounded-full hover:bg-white/40  flex items-center justify-center "
              onClick={() => {
                setTheme({
                  name: "dark",
                  bgPrimary: "#16181c",
                  bgSecondary: "#212327",
                  boxShadow:
                    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                  base: "#e7e9ea",
                  subbase: "#71767b",
                  btnColor: "#000",
                  blogText: "#ffffff"
                });
              }}
            > 
              <MdOutlineDarkMode />
            </button>
          )}
      
      </>
    )
}