import * as types from '../actions/ActionTypes';
import * as API from '../lib/api'
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

const initialState = {
    entries: [],
    status: ''
}
export const getEntries = createAction( types.GET_ENTRIES, API.getEntries )

export default handleActions({
    ...pender({
        type: types.GET_ENTRIES,
        onPending: (state, action) => ({
            ...state,
            status: 'pending'
        }),
        onSuccess: (state, action) => ({
            ...state,
            entries: action.payload.data.entries,
            status: 'success'
        }),
        onFailure: (state, action) =>({
            ...state,
            status: 'failed'
        }),
    })
}, initialState)