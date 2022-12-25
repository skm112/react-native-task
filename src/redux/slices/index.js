import { combineReducers } from "@reduxjs/toolkit";
import mediaReducer from './mediaSlice'
import authReducer from './authSlice'

const rootReducer = combineReducers({
    media: mediaReducer,
    auth: authReducer
})

export default rootReducer