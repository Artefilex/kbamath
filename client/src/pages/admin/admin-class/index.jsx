import SectionMain from "../../../components/section-main";
import AddPaketButton from "../../../components/add-paket-button";
import ClassList from "./class-list";
export default function AdminClass() {
  return (
    <SectionMain>
      <div className="w-[95%] flex flex-col gap-2">
        <AddPaketButton url={"/admin/class-add"} text={"Sınıf Ekle"} />
       <ClassList/>
      </div>
    </SectionMain>
  );
}