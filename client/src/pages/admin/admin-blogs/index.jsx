import AddBlog from "./addblog";

import SectionMain from "../../../components/section-main";
import BlogList from "./blog-list";
export default function AdminBlogs(){
    return (
        <SectionMain>
            <AddBlog/>
            <BlogList/>
        </SectionMain>
    )
}