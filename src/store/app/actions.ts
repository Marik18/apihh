import  {IAppActionTypes} from "./types";

interface SetInitAppAction {
    type: IAppActionTypes.APP__INIT_APP;
    payload: boolean;
  }
  
  // Общий тип Action
  export type AppAction =
    | SetInitAppAction