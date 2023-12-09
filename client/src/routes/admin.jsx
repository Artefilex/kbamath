import {  Route, Routes } from "react-router-dom";
import AdminMain from "../pages/admin";
import Error from "../Error" 
import {
   AdminClass,
    ClassAdd,
    AdminNots,
    AddNote,
    EditNote,
    AdminBlogs,
    EditBlog,
    AddBlog,
    AdminEducation,
    EditEducation,
    AddEducation,
    AdminQuizs,
    AddQuizs,
    EditQuizs,
    AdminCategory,
    AddCategory,
    UsersEdit,
    AdminUsers,
  
  } from "../pages/admin/routes";
import SuperAdmin from "../helpers/is-super-admin";

export default function AdminLocation () {
  const {filtered} = SuperAdmin()
    return (
     <>
      {
        filtered && <>
          <Routes> 
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/:id" element={<UsersEdit />} />
          <Route path="/admin/nots" element={<AdminNots />} />
          <Route path="/admin/add-note" element={<AddNote />} />
          <Route path="/admin/nots/:id" element={<EditNote />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/admin/blogs/:id" element={<EditBlog />} />
          <Route path="/admin/educations" element={<AdminEducation />} />
          <Route path="/admin/educations-add" element={<AddEducation />} />
          <Route path="/admin/education/:id" element={<EditEducation />} />
          <Route path="/admin/quizs" element={<AdminQuizs />} />
          <Route path="/admin/quizs-add" element={<AddQuizs />} />
          <Route path="/admin/quizs/:id" element={<EditQuizs />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/category-add" element={<AddCategory />} />
          <Route path="/admin/class" element={<AdminClass />} />
          <Route path="/admin/class-add" element={<ClassAdd />} />
      
      </Routes>
        
        </>
      }
        {
        !filtered && <>
          <Routes> 
          <Route path="*" element={<Error/>} />
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/:id" element={<UsersEdit />} />
          <Route path="/admin/nots" element={<AdminNots />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/admin/blogs/:id" element={<EditBlog />} />
      </Routes>
        
        </>
      }
     
     </>
    )

}

