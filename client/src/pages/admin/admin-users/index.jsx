import SectionMain from "../../../components/section-main";
import UsersList from "./users-list";

export default function AdminUsers() {
  return (
    <SectionMain>
      <div className="w-[95%] flex flex-col gap-2">
        <UsersList />
      </div>
    </SectionMain>
  );
}
