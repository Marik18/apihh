import { AxiosInstance } from "axios";
import { IRegion } from "../models/IRegion";

type IRegionsResponse = Array<IRegion>

export class ApiRegions {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios
      .get<IRegionsResponse>(`/regions`)
      .then((response) => {
        return response.data});
}