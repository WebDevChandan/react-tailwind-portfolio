import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    switcher: false,
}

export const customReducer = createReducer(initialState, {
    toggle: (state)=>{
        state.switcher = !state.switcher; 
    },
});