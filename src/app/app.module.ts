import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from './components/month.component';
import { CalendarComponent } from './pages/calendar.component';
import { DayComponent } from './components/day.component';
import { FooterComponent } from './components/footer.component';
import { AddReminderComponent } from './components/add-reminder.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { remindersReducer } from './redux/reminders.reducer';
import { selectDayReducer } from './redux/select-day.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    CalendarComponent,
    DayComponent,
    FooterComponent,
    AddReminderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ reminders: remindersReducer, selectDay: selectDayReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
