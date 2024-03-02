import axios from "axios";
import { backendUrl } from "./appConstants";

export const starterQuery = async () => {
  const response = await axios.get(backendUrl);
  console.log(response.data);
};
