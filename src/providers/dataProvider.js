import axios from "axios";
import { __API_URL__ } from "../constants/api";
import crudRequestTypes from "../constants/crudRequestTypes";
import { HttpError } from "react-admin";

export default async (type, resource, params) => {
  const token = localStorage.getItem("@admin:token");
  const dataResquest = crudRequestTypes[type];
  const dataForm = await dataResquest.dataSend(resource, params, type);

  console.log(type);

  return axios({
    method: "POST",
    url: __API_URL__,
    data: dataForm,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => dataResquest.dataReturn(res, resource))
    .catch((e) => {
      return Promise.reject(new HttpError("text", 403, {}));
    });
};

export const appRequest = async (query) => {
  const token = localStorage.getItem("@admin:token");

  return axios({
    url: __API_URL__,
    method: "post",
    data: {
      query: `
        query {
          ${query}
        }
      `,
    },
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
