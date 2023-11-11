import { memo } from "react"
import daktilo from "../../../assests/image/daktilo.jpg"
import PageHeader from "../../../components/page-heading"
const BlogHeader = memo(function BlogHeader(){
    return (
        <PageHeader image={daktilo} text={"BLOG"} /> 
    )
}
)

export default  BlogHeader