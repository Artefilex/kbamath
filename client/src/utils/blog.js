export const getData = async () => {
    const data = await fetch("http://localhost:4000/blogs",{
        method: "GET",
        headers: { "Content-Type": "application/Json" },
    });
    const response = await data.json();
    return [response]; // Veriyi bir dizi içinde döndür
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

