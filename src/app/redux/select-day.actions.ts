import { createAction, props } from '@ngrx/store';

export const change = createAction('[Select day Component] change', props<{ day: number }>());