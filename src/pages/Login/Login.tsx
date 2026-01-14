import Logo from "@/assets/Univ-logo.png";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-5 bg-[#f3dbfb]">
      <img src={Logo} alt="학교 로고" className="w-60 h-60" />
      <div className="text-2xl font-extrabold">태규대학교 학사행정시스템</div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-md bg-[#efdb88] p-3 w-100 h-40">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-end gap-2">
            <label htmlFor="id">로그인</label>
            <input type="text" id="id" className="rounded-md border-2 border-black" />
          </div>
          <div className="flex flex-row justify-end gap-2">
            <label htmlFor="pw">비밀번호</label>
            <input type="text" id="pw" className="rounded-md border-2 border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
