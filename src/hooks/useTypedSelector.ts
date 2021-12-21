import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../store/reducer";

export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;
