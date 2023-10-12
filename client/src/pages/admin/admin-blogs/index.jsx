import AddBlog from "./addblog";
import EditBlog from "./editblog";
import DeleteBlog from "./deleteblog";
import SectionMain from "../../../components/section-main";
export default function AdminBlogs(){
    return (
        <SectionMain>
            <AddBlog/>
            <EditBlog/>
            <DeleteBlog/>
        </SectionMain>
    )
}