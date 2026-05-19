import { authApi } from '@/api/auth/authApi';
import Logo from '@/assets/Univ-logo-2.png';
import PasswordModal from '@/components/Login/PasswordModal';
import { AUTH } from '@/types/authTypes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const clickHandler = async () => {
    try {
      const response = await authApi.login(id, pw);
      console.log('로그인 성공', response);
      if (response.success) {
        localStorage.setItem('user-id', response.result?.id!);
        localStorage.setItem('user-name', response.result?.name!);
        localStorage.setItem('user-auth', response.result?.auth!);
        if (response.result!.auth === AUTH.Admin) {
          navigate('/admin');
          return;
        }
        navigate('/main');
      }
    } catch (err: any) {
      console.error('로그인 실패:', err);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-5 bg-blue-100">
      <img src={Logo} alt="학교 로고" className="w-60 h-60" />
      <div className="text-2xl font-extrabold">태규대학교 학사행정시스템</div>
      <div className="relative flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-3 w-100 h-50 shadow-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-end gap-2">
            <label htmlFor="id">로그인</label>
            <input type="text" id="id" className="rounded-md border-2 border-black" value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="flex flex-row justify-end gap-2">
            <label htmlFor="pw">비밀번호</label>
            <input type="text" id="pw" className="rounded-md border-2 border-black" value={pw} onChange={(e) => setPw(e.target.value)} />
          </div>
        </div>
        <button className="w-full h-12 bg-white text-black cursor-pointer border-2 border-main rounded-md" onClick={clickHandler}>
          로그인하기
        </button>
        <span className="absolute bottom-2 text-sm underline cursor-pointer" onClick={() => setIsModalOpen(true)}>
          비밀번호 설정
        </span>
        {isModalOpen && <PasswordModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Login;
