import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editUserForSuperAdmin } from "../../../../servises/admin"; 
import { FormContent, FormButton } from "../../../../components/form";

function SuperAdminEdit() {
  const [makeAdminBySuper, setMakeAdminBySuper] = useState(false); 
  const { editid } = useParams();

  const userMakeAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("isAdmin", makeAdminBySuper);
    console.log(editid, formData);
    await editUserForSuperAdmin(editid, formData);
  };

  return (
    <form onSubmit={userMakeAdmin}>
      <FormContent>
        <input
          type="checkbox"
          checked={makeAdminBySuper} 
          onChange={(e) => setMakeAdminBySuper(e.target.checked)} 
        />
      </FormContent>

      <FormButton>Admin Yap</FormButton>
    </form>
  );
}

export default SuperAdminEdit;