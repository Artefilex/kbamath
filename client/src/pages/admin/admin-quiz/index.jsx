import SectionMain from "../../../components/section-main";
import QuizsList from "./quizs-list";
import AddPaketButton from "../../../components/add-paket-button";
export default function AdminQuizs() {
  return (
    <SectionMain>
     <div className="w-[95%] flex flex-col gap-2">
        <AddPaketButton url={"/admin/quizs-add"} text="Quizs Ekle" />
        <QuizsList />
      </div>
    </SectionMain>
  );
}
