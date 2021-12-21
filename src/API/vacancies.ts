import { AxiosInstance } from "axios";
import {IVacancy} from "../models/IVacancy"

type IVacanciesResponse = Array<IVacancy>

export class ApiVacancies {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = (data: object) =>
    this.axios
      .post<IVacanciesResponse>("/items", data)
      .then((response) =>  response.data);
}