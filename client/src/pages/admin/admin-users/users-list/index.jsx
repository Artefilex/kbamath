import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllItems, handleDelete } from "../../../../servises/admin";
import { Tooltip } from "react-tooltip";
import SuperAdmin from "../../../../helpers/is-super-admin";
import SuperAdminEdit from "../users-edit/SuperAdminEdit";
import { IoClose } from "react-icons/io5";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState(null);
  const [showModal, setShowModal] = useState({});
  useEffect(() => {
    const fetchUsers = async () => {
      const getLogin = await JSON.parse(localStorage.getItem("userLogin"));
      setLoginUser(getLogin);
      const response = await getAllItems("users");
      setUsers(response);
    };
    fetchUsers();
  }, []);
  const deleteUser = async (deleteUrl) => {
    const url = `users/${deleteUrl}`;
    const successMessage = `${deleteUrl} Qiuz başarılı bir şekilde silindi `;
    const errorMessage = "Qiuz Silinemedi";
    const response = await handleDelete(url, successMessage, errorMessage);
    if (response) {
      const filteredQuizs = users.filter(
        (item) => item.paramsUrl !== deleteUrl
      );
      setUsers(filteredQuizs);
    }
  };
  const handleToggleModal = (userId) => {
    setShowModal((prevShowModal) => ({
     
      [userId]: !prevShowModal[userId]
    }));
  };


  const { filtered } = SuperAdmin();
  return (
    <div className="w-[95%] flex flex-col gap-2">
      <div className="w-full hidden mobile:flex items-center justify-between px-4 py-2 bg-slate-700 text-white rounded-t-lg font-bold  "> <div> Kullanıcı Adı</div> <div>Email</div> <div> Aksiyon</div> </div>
      {filtered &&
        users.map((user) => (
          <div
            key={user.id}
            className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
          >
            <div className="flex items-center justify-around gap-4 w-full flex-col mobile:flex-row">
              <div className="w-full flex items-center gap-2 ">  
              <span className="block mobile:hidden font-bold">Kullanıcı Adı:</span>
              {user.username}</div>
              <div className="w-full flex items-center   gap-2 "> 
              <span className="block mobile:hidden font-bold">Email:</span>
              <div className="truncate w-[14rem]">{user.email}</div></div>
            </div>
            <div>
              <Tooltip
                content="Sadece Güncelleyebilirsin"
                anchorSelect="#admin"
              />
              {user.superAdmin ? (
                <div className="w-full flex items-center justify-between ">
                  <Link
                    to={`/admin/users/${user.paramsUrl}`}
                    className=" px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  "
                    id="admin"
                  >
                    Edit
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-between relative">
                  <button
                    className="mr-4"
                    onClick={() =>  handleToggleModal(user.paramsUrl)}
                  >
                    Edit
                  </button>
                  {showModal[user.paramsUrl] && (
                    <div className="absolute w-full min-h-[6rem] min-w-[12rem] mobile:min-w-[18rem] flex flex-col top-8 -right-20  mobile:top-0  mobile:right-[100px] bg-black border border-slate-800 z-50 ">
                      <button
                        className="flex flex-col h-[30px] items-center justify-center z-[6] rounded-bl-lg w-[30px] absolute bg-slate-800 text-white right-0 top-0"
                        onClick={() => handleToggleModal(user.paramsUrl)}
                      >
                        <IoClose className="h-[2rem]" />
                      </button>

                      <div className="flex items-center flex-col mt-4 justify-center">
                        <SuperAdminEdit editid={user.paramsUrl} />

                        <button
                          className="hover:bg-red-700 px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white text-white "
                          onClick={() => deleteUser(user.paramsUrl)}
                        >
                          Kullanıcıyı Sil
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      {!filtered &&
        users
          .filter((user) => user.email === loginUser?.email)
          .map((singleUser) => (
            <div
              key={singleUser.id}
              className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
            >
              <div className="flex items-center justify-around gap-4 w-full flex-col mobile:flex-row">
              <div className="w-full flex items-center gap-2 ">  
              <span className="block mobile:hidden font-bold">Kullanıcı Adı:</span>
              {singleUser.username}</div>
              <div className="w-full flex items-center   gap-2 "> 
              <span className="block mobile:hidden font-bold">Email:</span>
              <div className="truncate w-[14rem]">{singleUser.email}</div></div>
            </div>
              <div className="flex items-center justify-around gap-4 w-full flex-col mobile:flex-row">
              <div className="w-full flex items-center gap-2 ">  
              <span className="block mobile:hidden font-bold">Kullanıcı Adı:</span>
              {singleUser.username}</div>
              <div className="w-full flex items-center   gap-2 "> 
              <span className="block mobile:hidden font-bold">Email:</span>
              <div className="truncate w-[14rem]">{singleUser.email}</div></div>
            </div>
              <div>
                <Tooltip
                  content="Admin Yetkisi var sadece editleyebilirsin"
                  anchorSelect="#admin"
                />

                <Link
                  to={`/admin/users/${singleUser.paramsUrl}`}
                  className=" px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  "
                  id="admin"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
}
