import { createSlice } from '@reduxjs/toolkit'
import { fetchTrendingMedia, fetchSearchMovies } from '../asyncThunks'

const initialState = {
    data: [],
    page: 1,
    totalPages: 0,

    searchData: [],
    searchPage: 1,
    searchTotalPages: 0,


    isLoading: false,
    isRefreshing: false,
    isNextLoading: false
}

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        resetMediaReducer: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingMedia.pending, (state, action) => {
                const { indicatorType } = action.meta.arg
                if (indicatorType == "refresh") {
                    state.isRefreshing = true
                } else if (indicatorType == "next-page") {
                    state.isNextLoading = true
                } else {
                    state.isLoading = true
                }
            })
            .addCase(fetchTrendingMedia.fulfilled, (state, action) => {
                const { page, indicatorType } = action.meta.arg
                if (page == 1) {
                    if (action.payload?.results) state.data = action.payload.results;
                } else {
                    if (action.payload?.results) state.data = [...state.data, ...action.payload.results];
                }
                if (action.payload?.page) state.page = action.payload.page;
                if (action.payload?.total_pages) state.totalPages = action.payload.total_pages;
                if (indicatorType == "refresh") {
                    state.isRefreshing = false
                } else if (indicatorType == "next-page") {
                    state.isNextLoading = false
                } else {
                    state.isLoading = false
                }
            })
            .addCase(fetchTrendingMedia.rejected, (state, action) => {
                const { indicatorType } = action.meta.arg
                if (indicatorType == "refresh") {
                    state.isRefreshing = false
                } else if (indicatorType == "next-page") {
                    state.isNextLoading = false
                } else {
                    state.isLoading = false
                }

            }),

            builder
                .addCase(fetchSearchMovies.pending, (state, action) => {
                    const { indicatorType } = action.meta.arg
                    if (indicatorType == "refresh") {
                        state.isRefreshing = true
                    } else if (indicatorType == "next-page") {
                        state.isNextLoading = true
                    } else {
                        state.isLoading = true
                    }
                })
                .addCase(fetchSearchMovies.fulfilled, (state, action) => {
                    const { page, indicatorType } = action.meta.arg
                    if (page == 1) {
                        if (action.payload?.results) state.searchData = action.payload.results;
                    } else {
                        if (action.payload?.results) state.searchData = [...state.searchData, ...action.payload.results];
                    }
                    if (action.payload?.page) state.searchPage = action.payload.page;
                    if (action.payload?.total_pages) state.searchTotalPages = action.payload.total_pages;
                    if (indicatorType == "refresh") {
                        state.isRefreshing = false
                    } else if (indicatorType == "next-page") {
                        state.isNextLoading = false
                    } else {
                        state.isLoading = false
                    }
                })
                .addCase(fetchSearchMovies.rejected, (state, action) => {
                    const { indicatorType } = action.meta.arg
                    if (indicatorType == "refresh") {
                        state.isRefreshing = false
                    } else if (indicatorType == "next-page") {
                        state.isNextLoading = false
                    } else {
                        state.isLoading = false
                    }

                })
    }
})


export const { resetMediaReducer } = mediaSlice.actions

export default mediaSlice.reducer