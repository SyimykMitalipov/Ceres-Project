import { configureStore,  } from '@reduxjs/toolkit';
import { reducerObj } from 'redux-api';
import { requester } from 'requester';



export const store = configureStore({
  reducer:reducerObj,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: requester
      }
    })
})