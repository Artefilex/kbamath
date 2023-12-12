import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editUserForSuperAdmin, getAllItems} from "../../../../servises/admin";
import { FormContent, FormButton } from "../../../../components/form";
import PropTypes from "prop-types"
function SuperAdminEdit({editid}) {
  const [makeAdminBySuper, setMakeAdminBySuper] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllItems("users");
      const filterUser = response.find((user) => user.username === editid);
      setMakeAdminBySuper(filterUser.isAdmin);
    };
    fetchUsers();
  }, [editid]);

  const userMakeAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("isAdmin", makeAdminBySuper);
    await editUserForSuperAdmin(editid, formData);
     navigate("/admin/users");
  };

  
  return (
    <form
      onSubmit={userMakeAdmin}
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3 relative text-white"
    >
      <FormContent>
        <div className="flex items-center justify-center gap-4">
          <input
            className="px-5 py-5 text-[50px]"
            type="checkbox"
            checked={makeAdminBySuper}
            onChange={(e) => setMakeAdminBySuper(e.target.checked)}
          />
          {makeAdminBySuper ? (
            <div>Admin Yetkisi Verildi</div>
          ) : (
            <div>Admin değil </div>
          )}
        </div>
      </FormContent>
      <FormButton>Kullanıcıyı güncelle</FormButton> 
     
      
    </form>
  );
}
SuperAdminEdit.propTypes = {
    editid: PropTypes.string
}

export default SuperAdminEdit;
