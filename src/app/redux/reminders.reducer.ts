import { createReducer, on } from '@ngrx/store';
import { add, edit, remove, resetDay } from './reminders.actions';

export const initialState = [];

const _remindersReducer = createReducer(
    initialState,
    on(add, (state,action) => [...state, action]),
    on(edit, (state, action) => state.map((i, index) => action.id !== index ? action : i)),
    on(remove, (state, action) => state.filter((i, index) => action.id != index)),
    on(resetDay, (state, action) => state.filter(i => action.day != i.day))
);

export function remindersReducer(state, action) {
    return _remindersReducer(state, action);
}