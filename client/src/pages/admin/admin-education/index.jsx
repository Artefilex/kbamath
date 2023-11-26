import SectionMain from "../../../components/section-main";
import EducationList from "./education-list";
import AddPaketButton from "../../../components/add-paket-button";
export default function AdminEducation() {
  return (
    <SectionMain>
      <div className="w-[95%] flex flex-col gap-2">
        <AddPaketButton url={"/admin/educations-add"} text="Özel Ders Ekle" />
        <EducationList />
      </div>
    </SectionMain>
  );
}
