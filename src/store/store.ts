import {combineReducers} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {doctorReducer} from "./doctorSlice";

export type AppRootStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    doctorReducer
})
export const store = configureStore({
    reducer: rootReducer,
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//@ts-ignore
window.store = store