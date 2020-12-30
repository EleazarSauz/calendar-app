import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './reminders.actions';

export const initialState = [];

const _remindersReducer = createReducer(
    initialState,
    on(increment, (state,action) => [...state, action]),
    on(decrement, (state) => state),
    on(reset, (state) => [])
);

export function remindersReducer(state, action) {
    return _remindersReducer(state, action);
}