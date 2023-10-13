import {useState } from "react"
 import { postData } from "../../../../utils/blog"

export default function AddBlog (){
    const [form ,setForm ] = useState({
        header: "",
      subtitle: "",
      content: "",
   })
   const handleSubmit = (e) => {
    e.preventDefault()
    
     postData(form)
    setForm({
        header: "",
        subtitle: "",
        content: "",  
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
     
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 ">
       <input type="text" name="header"  className=" border  outline-none  bg-transparent p-1 px-5 rounded-md "  onChange={handleChange} value={form.header} />
      
        <input type="text" name="subtitle"   className=" border  outline-none  bg-transparent p-1 px-5 rounded-md " onChange={handleChange} value={form.subtitle} />
        <input type="text" name="content"     className=" border  outline-none  bg-transparent p-1 px-5 rounded-md " onChange={handleChange}  value={form.content}/>
        <button type="submit"> symbşt</button>
        </form>
    )
} 