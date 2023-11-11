import { useEffect , useState} from "react";

export default function IsMobile () {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 599);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);


      return {isMobile }

}