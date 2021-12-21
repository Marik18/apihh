import { GetState } from "../index";
import { IAppActionTypes } from "./types";
import { data__getRegions } from "../data/thunks";


/**
 * Инициализвация приложения
 */
export const app__initApp = () => (dispatch: any, getState: GetState) => {
  dispatch(data__getRegions());
  dispatch({ type: IAppActionTypes.APP__INIT_APP, payload: true });
};
