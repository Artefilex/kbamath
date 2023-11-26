import SectionMain from "../../../components/section-main";
import BlogList from "./blog-list";
import AddPaketButton from "../../../components/add-paket-button";
export default function AdminBlogs() {
  return (
    <SectionMain>
      <div className="w-[95%] flex flex-col gap-2">
        <AddPaketButton url={"/admin/blogs-add-blog"} text={"Blog Ekle"} />
        <BlogList />
      </div>
    </SectionMain>
  );
}
