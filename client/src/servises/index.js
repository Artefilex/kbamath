import axios from "axios"

// const baseUrl = "https://artefilex-portfoly.onrender.com";
const baseUrl = "http://localhost:4000";
export const  getBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blogs`);
    return [response.data];
  };
export const getSingleBlog= async (id)=>{
    const response = await axios.get(`${baseUrl}/blogs/${id}`);
    return response.data
}

export const getLessons = async ()=>{
    const response = await axios.get(`${baseUrl}/lessons`);
    return response.data
}

export const getNots = async ()=>{
    const response = await axios.get(`${baseUrl}/nots`);
    return response.data
}

export const getNotsClass = async (classid)=>{
    const response = await axios.get(`${baseUrl}/nots/${classid}`);
    return response.data
}

export const getNotsTopic = async (classid,topicid )=>{
    const response = await axios.get(`${baseUrl}/nots/${classid}/${topicid}`);
    return response.data
}

export const getquizs = async ( )=>{
    const response = await axios.get(`${baseUrl}/quizs`);
    return response.data
}

export const getSingleQuizs = async ( quizid)=>{
    const response = await axios.get(`${baseUrl}/quizs/${quizid}`);
    return response.data
}
