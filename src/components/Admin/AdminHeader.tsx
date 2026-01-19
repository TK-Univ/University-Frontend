import Logo from "@/assets/Univ-logo.png";

const AdminHeader = () => {
  const userName = localStorage.getItem("user-name");
  return (
    <div className="w-full h-24 bg-main flex flex-row items-center justify-between px-5">
      <img src={Logo} alt="" className="w-15 h-15 cursor-pointer" />
      <div className="text-white">{userName}님, 환영합니다</div>
    </div>
  );
};

export default AdminHeader;
