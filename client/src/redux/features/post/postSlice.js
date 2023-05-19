import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    posts: [],
    popularPosts: [],
    token: null,
    isLoading: false
}

export const createPost = createAsyncThunk(
    'post/createPost',
    async ({ formData }) => {
        try {
            const { data } = await axios.post("/post/createPost",
                formData,
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

export const getPostsByFilter = createAsyncThunk(
    'post/getPostsFiltered',
    async (filter) => {
        try {
            const { data } = await axios.post("/post/getPostsFiltered", filter)
            console.log(data)
            return data
        } catch (error) {
            return error.response.data
        }
    })

export const getPost = createAsyncThunk(
    'post/getPost',
    async () => {
        try {
            const { data } = await axios.get("/auth/getUser")
            return data
        } catch (error) {
            return error.response.data
        }
    })

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: {
        // Create
        [createPost.pending]: (state) => {
            state.isLoading = true
        },
        [createPost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts.push(action.payload)
        },
        [createPost.rejected]: (state) => {
            state.isLoading = false
        },
        //Get by filter
        [getPostsByFilter.pending]: (state) => {
            state.isLoading = true
        },
        [getPostsByFilter.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        },
        [getPostsByFilter.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export const getPosts = state => state.post.posts

export default postSlice.reducer