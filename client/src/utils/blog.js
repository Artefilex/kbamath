export const getData = async () => {
    const data = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs`,{
        method: "GET",
        headers: { "Content-Type": "application/Json" },
    });
    const response = await data.json();
    return [response]; // Veriyi bir dizi içinde döndür
}

const location = window.location.href.split("/").pop()
export const getRightBar = async ()=>{
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs/${location}`,{
    method: "GET",
    headers: {"Content-Type": "application/Json"}
  })
  const response = await data.json()
  console.log(response.blogs)
  return response.blogs

}

export const getSingleBlog = async ()=>{
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs/${location}`,{
    method: "GET",
    headers: {"Content-Type": "application/Json"}
  })
  const response = await data.json()

  return response.blog
}


// calışıyor problem yok admin girişi yapmalıyız 
export const postData = async (bodyData) => {
    await fetch("http://localhost:4000/admin/blogs/create",{
        method: "POST",
        headers: { "Content-Type": "application/Json" },
        body: JSON.stringify({form: bodyData})
    })  
     .then((res) => res.json())
    .then((data) => {
      console.log("request success", data);
    })
    .catch((error) => {
      console.error("Error creating blog:", error);
    });

}

