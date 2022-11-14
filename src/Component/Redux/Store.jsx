
import {legacy_createStore as createStore} from "redux"
import { initialState, LoginReducer } from "./Reducer"


 export const store= createStore(LoginReducer,initialState)