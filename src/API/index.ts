import axios, { AxiosInstance } from "axios";
import { ApiRegions } from "./regions";
import { ApiVacancies } from "./vacancies";
import {ApiSummaries} from "./summaries";

class Api {
  private axios: AxiosInstance;
  regions: ApiRegions;
  vacancies: ApiVacancies;
  summaries: ApiSummaries;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.regions = new ApiRegions(axios);
    this.vacancies = new ApiVacancies(axios);
    this.summaries = new ApiSummaries(axios);
  }
}
//главный объект для запросов
let API: Api;
const createAPI = (headers = {}) => {
  API = new Api(
    axios.create({
      withCredentials: false,
      baseURL: "http://localhost:3000",
      headers,
      // headers: {
      //   //  "Authorization": "API_KEY"
      // },
    })
  );
};
createAPI({});

export { API, createAPI };

export enum HTTP_STATUS {
  AppError = 100,
  ServerError = 500,
  Access = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  NotFound = 404,
}
