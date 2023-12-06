import { getAllItems } from "../../../servises/admin";


export  const checkClassUniqueness = async (title , url) => {
    const existingClasses = await getAllItems(url);
    return !existingClasses.some((cls) => cls.title === title);
  };

  export  const checkCBlogUniqueness = async (header ) => {
    const existingClasses = await getAllItems("blogs");
    return !existingClasses.some((cls) => cls.header === header);
  };  