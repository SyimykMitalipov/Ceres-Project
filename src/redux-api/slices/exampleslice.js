import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { addQueryCases } from 'common/helpers';
import { REQUEST_STATUSES } from 'common/constants';





const name = 'example'


const ENDPOINTS = {
  EXAMPLE: 'api/v1/example'
}

/// build fc for request to API
export const getExample = createAsyncThunk(
  `${name}/getExample`,
  async(_,{extra: api}) => {
    const response = await api.get(ENDPOINTS.EXAMPLE)
    return response
  }
)
 
/// initial state for slice
const initialState = {
  exampleStatus: REQUEST_STATUSES.NOT_REQUESTED,
  example: [],
  exampleError: null
}


/// creating slice and use custom addQueryCases instead addCases
const exampleSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder){
    addQueryCases(builder,getExample,{
      status: 'exampleStatus',
      data: 'example',
      error:'exampleError'
    })
  }
})


export default exampleSlice;