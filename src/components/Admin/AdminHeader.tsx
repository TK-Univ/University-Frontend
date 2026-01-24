import Logo from "@/assets/Univ-logo.png";
import UpArrow from "@/assets/triangle-up.svg?react";
import DownArrow from "@/assets/triangle-down.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const userName = localStorage.getItem("user-name");

  const logoutHandler = () => {
    localStorage.removeItem("user-name");
    localStorage.removeItem("user-auth");
    navigate("/");
  };

  const modalOpenHandler = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-24 bg-main flex flex-row items-center justify-between px-5">
      <img src={Logo} alt="" className="w-15 h-15 cursor-pointer" />
      <div className="flex flex-row items-center relative w-auto">
        <div className="text-white">{userName}님, 환영합니다</div>
        {modalOpen ? (
          <DownArrow className="w-10 h-10 text-gold cursor-pointer" onClick={modalOpenHandler} />
        ) : (
          <UpArrow className="w-10 h-10 text-gold cursor-pointer" onClick={modalOpenHandler} />
        )}
        {modalOpen && (
          <div className="absolute top-full mt-1 w-full h-auto p-1 bg-gray-400 rounded-md flex flex-col items-center">
            <div className="cursor-pointer" onClick={logoutHandler}>
              로그아웃
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
