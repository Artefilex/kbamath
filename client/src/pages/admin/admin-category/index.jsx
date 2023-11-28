import SectionMain from "../../../components/section-main";
import AddPaketButton from "../../../components/add-paket-button";
import CategoryList from "./category-list";
export default function AddCategory() {
  return (
    <SectionMain>
      <div className="w-[95%] flex flex-col gap-2">
        <AddPaketButton url={"/admin/category-add"} text={"Category Ekle"} />
     <CategoryList/>
      </div>
    </SectionMain>
  );
}