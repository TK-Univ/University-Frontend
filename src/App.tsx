// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/NotFound/NotFound";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<User />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
