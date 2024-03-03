import axios from "axios";
import { backendUrl } from "./appConstants";
import { toast } from "react-toastify";

export const handleApiResponse = (response, setState) => {
  const data = response.data;

  if (data.status) {
    toast.success(data.details);
    setState ? setState(data.data) : "";
  } else {
    toast.error(data.details);
  }
};

export const starterQuery = async () => {
  const response = await axios.get(backendUrl);
  console.log(response.data);
};

export const handleSignupVerification = async (payload) => {
  try {
    const response = axios.post(`${backendUrl}/api/verify/signup`, payload);
    handleApiResponse(response);
  } catch (error) {
    throw error;
    console.log(error);
  }
};

export const handleLoginVerification = async () => {
  try {
    const response = axios.post();
  } catch (error) {
    throw error;
    console.log(error);
  }
};
