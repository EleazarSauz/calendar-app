import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReminderComponent } from './components/add-reminder.component';
import { DayComponent } from './components/day.component';
import { CalendarComponent } from './pages/calendar.component';

const routes: Routes = [
  {
    path: '', component: CalendarComponent, children: [
      {
        path: '',
        redirectTo: 'day',
        pathMatch: 'full'
      },
      {
        path: 'day',
        component: DayComponent
      },
      {
        path: 'reminder',
        component: AddReminderComponent
      }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
