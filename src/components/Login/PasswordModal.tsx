import { authApi } from "@/api/auth/authApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onClose: () => void;
}

type FormValues = {
  authCode: string;
  email: string;
  password: string;
};

const PasswordModal = ({ onClose }: Props) => {
  const [isRequestSent, setIsRequestSent] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const methods = useForm<FormValues>();
  const { register, watch } = methods;

  const requestBtnHandler = async () => {
    try {
      const result = await authApi.requestAuthCode(watch("email"));
      if (result.success) {
        alert("인증번호를 전송했습니다!");
        setIsRequestSent(true);
      }
    } catch (e) {
      console.error("인증번호 전송 오류");
    }
  };

  const authBtnHandler = async () => {
    try {
      const result = await authApi.verifyAuthCode(watch("email"), watch("authCode"));
      if (result.success) {
        alert("인증 성공!");
        setIsVerified(true);
      }
    } catch (e) {
      console.error("인증 오류");
    }
  };

  const setPwBtnHandler = async () => {
    try {
      const result = await authApi.setPassword(watch("email"), watch("password"));
      const id = result.result?.id;
      if (result.success) alert(`비밀번호 설정 성공, 아이디는 ${id}입니다`);
      onClose();
    } catch (e) {
      console.error("비밀번호 설정 오류");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-md p-6 w-96" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">비밀번호 설정</h2>
        {/* 전송전 */}
        {!isRequestSent && (
          <div>
            <input {...register("email")} type="email" placeholder="이메일" className="w-full border p-2 mb-3" />
            <button onClick={requestBtnHandler} className="w-full bg-black text-white h-10 cursor-pointer">
              인증번호 요청
            </button>
          </div>
        )}
        {/* 인증전 */}
        {isRequestSent && !isVerified && (
          <div>
            <input {...register("authCode")} type="text" placeholder="인증번호" className="w-full border p-2 mb-3" />
            <button onClick={authBtnHandler} className="w-full bg-black text-white h-10 cursor-pointer">
              인증
            </button>
          </div>
        )}
        {/* 인증후 */}
        {isRequestSent && isVerified && (
          <div>
            <input {...register("password")} type="password" placeholder="비밀번호" className="w-full border p-2 mb-3" />
            <button onClick={setPwBtnHandler} className="w-full bg-black text-white h-10 cursor-pointer">
              변경
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordModal;
