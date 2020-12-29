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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
