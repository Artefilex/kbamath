import {useEffect ,  useState } from "react"
 import { postData  ,getData} from "../../utils/blog"
export default function  Blogs (){
    const [arr, setArr] = useState([]) 
    useEffect(()=>{
        const fetchData = async () => {
            const response = await getData();
            setArr(response[0]); // Veriyi state'e atayın
          };
         
          fetchData();
    })
 console.log(arr);
    const [form ,setForm ] = useState({
        fname: "",
        sname: ""
   })
    const handleSubmit = (e) => {
        e.preventDefault()
        
         postData(form)
        setForm({
          sname  : "",
          fname : ""  
        })
      }
      const handleChange = (e) => {
         const {name, value} = e.target
         setForm((prevForm)=>(
          {
              ...prevForm,
              [name]: value
              }
         ))
        }

        
    return (
        <div>
              <form action="" onSubmit={handleSubmit}>
            <input type="text" name="fname"  onChange={handleChange} value={form.fname} />
            <input type="text" name="sname" onChange={handleChange}  value={form.sname}/>
            <button type="submit"> symbşt</button>
         </form>
         Blogs
        </div>
    )
}