import axios from "axios";

const baseUrl = "https://artefilex-portfoly.onrender.com";

export const  getBlogsData = async () => {
  const response = await axios.get(`${baseUrl}/blogs`);
  return [response.data];
};

export const getSingleBlog = async (url) => {
  const response = await axios.get(`${baseUrl}/blogs/${url}`);

  return response.data;
};

// export const getRightBar = async () => {
//   const  response = await axios.get( `${import.meta.env.VITE_BASE_URL}/blogs/${location}`);
//   return response.data.blogs;
// };

// calışıyor problem yok admin girişi yapmalıyız
export const postData = async (bodyData) => {
  await fetch("http://localhost:4000/admin/blogs/create", {
    method: "POST",
    headers: { "Content-Type": "application/Json" },
    body: JSON.stringify({ form: bodyData }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("request success", data);
    })
    .catch((error) => {
      console.error("Error creating blog:", error);
    });
};
