import axios from "axios";
import { projectData } from "../interfaces/projectData";

const viteApiUrl: string = import.meta.env.VITE_API_URL;

export const fetchProjectData = async (): Promise<projectData[]> => {
  const response = await axios.get<projectData[]>(viteApiUrl);
  return response.data;
};
