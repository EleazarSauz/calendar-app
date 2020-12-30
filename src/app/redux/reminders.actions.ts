import { createAction, props } from '@ngrx/store';

export const add = createAction('[Reminders] Add', props<{ text: string; day: number, color: string, hour: number }>());
export const edit = createAction('[Reminders] Edit', props<{ text: string; day: number, color: string, hour: number, id: number }>());
export const remove = createAction('[Reminders] Remove', props<{ id: number; }>());
export const resetDay = createAction('[Reminders] ResetDay', props<{ day: number; }>());