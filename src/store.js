import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"


import {reducer} from "./services/reducer"

const middlerWare =[thunk]



const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middlerWare)))

