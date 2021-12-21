import { AxiosInstance } from "axios";
import {ISummary} from "../models/ISummary";

type ISummariesResponse = Array<ISummary>

export class ApiSummaries {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = (data: object) =>
    this.axios
      .post<ISummariesResponse>("/summaries", data)
      .then((response) =>  response.data);
}