import AddBlog from "./addblog";
import EditBlog from "./editblog";
import DeleteBlog from "./deleteblog";
export default function AdminBlogs(){
    return (
        <div>
            <AddBlog/>
            <EditBlog/>
            <DeleteBlog/>
        </div>
    )
}