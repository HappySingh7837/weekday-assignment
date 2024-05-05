import { apiEndpoints } from "@/helpers/apiEndPoints";
import { dispatch } from "../store";
import { spinner } from "./uiAction";
import { API } from "@/utility/API";

export const getJobDetailsApiCall = async (page) => {
  dispatch(spinner(true));
  const payload = {
    limit: 10,
    offset: page,
  };

  const res = await API.post(apiEndpoints.jobs, payload)
    .then((res) => {
      // if (res.status == 200) {
      return res.data;
      // }
    })
    .catch((error) => {
      return error.response;
    });
  dispatch(spinner(false));
  return res;
};
