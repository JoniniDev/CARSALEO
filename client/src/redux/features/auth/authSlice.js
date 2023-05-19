import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, fullName, password }) => {
        try {
            const { data } = await axios.post("/auth/reg", {
                email, password, fullName
            },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            if (data.token) {
                window.localStorage.setItem("token", data.token)
            }
            return data
        } catch (error) {
            return error.response.data
        }
    })

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }) => {
        try {
            const { data } = await axios.post("/auth/log", {
                email, password
            },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            if (data.token) {
                window.localStorage.setItem("token", data.token)
            }
            return data
        } catch (error) {
            return error.response.data
        }
    })

export const getMe = createAsyncThunk(
    'auth/getMe',
    async () => {
        try {
            const { data } = await axios.get("/auth/getUser",
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            return data
        } catch (error) {
            return error.response.data
        }
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: {
        // Reg
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.msg
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.msg
        },
        //Log
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.msg
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.msg
        },
        //Get
        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = null
            state.user = action.payload?.user
            state.token = action.payload?.token
        },
        [getMe.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.msg + "Error"
        },
    }
})

export const checkIsAuth = state => Boolean(state.auth.token)

export const { logout } = authSlice.actions

export default authSlice.reducer