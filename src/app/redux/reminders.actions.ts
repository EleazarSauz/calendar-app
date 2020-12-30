import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment', props<{ text: string; day: number, color: string, hour: number }>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');