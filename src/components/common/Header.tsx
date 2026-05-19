import Logo from '@/assets/Univ-logo.png';
import DownArrowBox from '@/assets/down-arrow-box.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const userName = localStorage.getItem('user-name');

  const logoutHandler = () => {
    localStorage.removeItem('user-name');
    localStorage.removeItem('user-auth');
    navigate('/');
  };

  const modalOpenHandler = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-24 bg-main flex flex-row items-center justify-between px-5">
      <img src={Logo} alt="" className="w-15 h-15 cursor-pointer" />
      <div className="bg-lightPurple flex flex-row gap-3 items-center relative w-auto rounded-2xl p-2">
        <div className="text-black">{userName}님, 환영합니다</div>
        {modalOpen ? (
          <DownArrowBox className="w-10 h-10 text-main cursor-pointer" onClick={modalOpenHandler} />
        ) : (
          <DownArrowBox className="w-10 h-10 text-main cursor-pointer rotate-180" onClick={modalOpenHandler} />
        )}
        {modalOpen && (
          <div className="absolute left-0 top-full mt-1 w-full h-auto p-1 bg-gray-200 rounded-2xl border-2 border-gray-400">
            <div className="cursor-pointer w-full px-2 text-center" onClick={logoutHandler}>
              로그아웃
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
