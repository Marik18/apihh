import { IRegion } from "../../models/IRegion";
import { ISummary } from "../../models/ISummary";
import { IVacancy } from "../../models/IVacancy";
import { DataAction, IDataActionTypes } from "./types";

const initialState = {
    regions: null as Array<IRegion> | null,
    vacancies: null as Array<IVacancy> | null,
    summaries: null as Array<ISummary> | null,
}

type IDataState = typeof initialState;

export const dataReducer = (
    state = initialState,
    action: DataAction
): IDataState => {
    switch (action.type) {
        case IDataActionTypes.DATA__SET_REGIONS:
            return { ...state, regions: action.payload };
        case IDataActionTypes.DATA__SET_VACANCIES:
            return { ...state, vacancies: action.payload };
        default:
            return state;
    }
}