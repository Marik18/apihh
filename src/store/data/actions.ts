import { IRegion } from "../../models/IRegion";
import { IVacancy } from "../../models/IVacancy";
import { ISummary } from "../../models/ISummary";
import { DataAction, IDataActionTypes } from "./types";

//Записать регионы в store

export const data__setRegions = (regions: Array<IRegion> | null) : DataAction => ({
    type: IDataActionTypes.DATA__SET_REGIONS,
    payload: regions,
});

//Записать информацию о вакансиях в store

export const data__setVacancies = (vacancies: Array<IVacancy> | null) : DataAction => ({
    type: IDataActionTypes.DATA__SET_VACANCIES,
    payload: vacancies,
});

//Записать информацию о резюме в store

export const data__setSummaries = (summaries: Array<ISummary> | null) : DataAction => ({
    type: IDataActionTypes.DATA__SET_SUMMARIES,
    payload: summaries,
});
