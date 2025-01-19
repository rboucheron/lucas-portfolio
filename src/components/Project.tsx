import React, { useEffect, useState } from "react";
import Scene from "./Scene";
import { useCameraPosition } from "../utils/store";
import Object from "./Object";
import { projectData } from "../interfaces/projectData";
import { fetchProjectData } from "../utils/apiRequester";
import { position } from "../three/interface/position";
import { Link } from "react-router-dom";

const Project: React.FC = () => {
  const { setCameraPosition } = useCameraPosition();
  const [projects, setProjects] = useState<projectData[]>([]);
  const [selectProject, setSelectProject] = useState<number | null>(null);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const data = await fetchProjectData();
      setProjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleObjectClick = (position: position, id: number) => {
    setCameraPosition(position);
    setSelectProject(id);
  };

  const handleSceneClick = () => {
    setSelectProject(null);
    setCameraPosition({
      x: 0,
      y: 1,
      z: 2,
    });
  };

  return (
    <>
      <div className="mt-6">
        <Scene onSceneClick={handleSceneClick}>
          {projects.map((project) => (
            <Object
              key={project.id}
              onClick={() => handleObjectClick(project.position, project.id)}
              assets={project.object}
            />
          ))}
        </Scene>
      </div>

      {selectProject && (
        <div className="w-full flex items-center p2 ">
          <Link
            to="/project/"
            className="bg-maron text-white p-4 font-semibold rounded-xl m-auto "
          >
            _VOIR LE PROJETS
          </Link>
        </div>
      )}
    </>
  );
};

export default Project;
