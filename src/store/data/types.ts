import { IRegion } from "../../models/IRegion";
import { IVacancy } from "../../models/IVacancy";
import { ISummary } from "../../models/ISummary";

export enum IDataActionTypes {
    DATA__SET_REGIONS = "[DATA] SET_REGIONS",
    DATA__SET_VACANCIES = "[DATA] SET_VACANCIES",
    DATA__SET_SUMMARIES = "[DATA] SET_SUMMARIES",
}


//Типы ActionCreators

interface SetRegionsAction {
    type: IDataActionTypes.DATA__SET_REGIONS;
    payload: Array<IRegion> | null;
}

interface SetVacanciesAction {
    type: IDataActionTypes.DATA__SET_VACANCIES;
    payload: Array<IVacancy> | null;
}

interface SetSummariesAction {
    type: IDataActionTypes.DATA__SET_SUMMARIES;
    payload: Array<ISummary> | null;
}

// Общий тип Action
export type DataAction = 
| SetRegionsAction
| SetVacanciesAction
| SetSummariesAction