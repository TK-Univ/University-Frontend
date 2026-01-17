import StudentsList from "./StudentsList/StudentsList";
import { StudentsListProvider } from "./StudentsList/StudentsListProvider";

const AdminBodyBox = () => {
  return (
    <div className="flex-1 min-h-screen bg-lightPurple rounded-xl">
      <StudentsListProvider>
        <StudentsList />
      </StudentsListProvider>
    </div>
  );
};

export default AdminBodyBox;
