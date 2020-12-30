import { createReducer, on } from '@ngrx/store';
import { change } from './select-day.actions';

export const initialState = 2;

const _selectDayReducer = createReducer(
    initialState,
    on(change, (state,action) => action.day)
);

export function selectDayReducer(state, action) {
    return _selectDayReducer(state, action);
}