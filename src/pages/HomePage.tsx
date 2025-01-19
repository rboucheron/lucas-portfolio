import { Header } from "../components/Header.tsx";
import Project from "../components/Project.tsx";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-gray to-white mt-10 h-screen">
        < Project />
      </div>
    </>
  );
};

export default HomePage;
