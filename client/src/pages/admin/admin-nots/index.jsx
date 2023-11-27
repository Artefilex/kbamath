import AddPaketButton from "../../../components/add-paket-button";
import SectionMain from "../../../components/section-main";

import NoteList from "./note-list";

export default function AdminNots() {
  return (
    <SectionMain>
      <div className="w-[95%] flex flex-col gap-2">
        <AddPaketButton url={"/admin/educations-add"} text="Not Ekle" />
        <NoteList />
      </div>
    </SectionMain>
  );
}
