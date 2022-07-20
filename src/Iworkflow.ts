import axios from "axios";

export const startWorkflow = async (key: string, code: string, bu: string) => {
  const headers = {
    key: key,
    code: code,
    bu: bu,
    timezone: "5294923649234237",
    "Content-Type": "application/json",
  };
  try {
    const result = await axios.post(
      "http://localhost:8000/workflowservice/startWorkflow",
      {},
      { headers }
    );
  
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
