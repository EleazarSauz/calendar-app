import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MonthComponent } from './components/month.component';
import { CalendarComponent } from './pages/calendar.component';
import { DayComponent } from './components/day.component';
import { FooterComponent } from './components/footer.component';
import { AddReminderComponent } from './components/add-reminder.component';
import { EditReminderComponent } from './components/edit-reminder.component';

import { remindersReducer } from './redux/reminders.reducer';
import { selectDayReducer } from './redux/select-day.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    CalendarComponent,
    DayComponent,
    FooterComponent,
    AddReminderComponent,
    EditReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ reminders: remindersReducer, selectDay: selectDayReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
