import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, GlobalState} from "../types/store";

export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector

