import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApi } from '../../apis';


export const fetchTrendingMedia = createAsyncThunk(
    'media/fetchByTrending',
    async ({ mediaType, timeWindow, page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`trending/${mediaType}/${timeWindow}`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.media.totalPages && page > _s.media.totalPages) {
                    return false
                }
            }
        }
    }

)

export const fetchSearchMovies = createAsyncThunk(
    'media/fetchBySearchMovies',
    async ({ query, page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const queryParams = {
            language: "en-US",
            page: page,
            include_adult: 'false',
            query
        }
        const response = await getApi("search/movie", queryParams)
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.media.searchTotalPages && page > _s.media.searchTotalPages) {
                    return false
                }
            }
        }
    }
)

