import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
    token: null | string,
    user: null | any
}

const initialState: IAuth = {
    token: localStorage.getItem("token") || null,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken : (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem("token", state.token)
        },
        removeToken: (state) => {
            state.token = null
            localStorage.removeItem("token")
        }
    }
})

export const {removeToken,setToken} = authSlice.actions
export default authSlice.reducer