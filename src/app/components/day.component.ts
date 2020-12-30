import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styles: []
})
export class DayComponent implements OnInit {
  reminders$: Observable<any>
  selectDay$: Observable<any>;
  day: number;
  hours: number[] = [...Array(24).keys()];
  listDays: any = [29, 30, ...Array(31).keys(), 0, 1].map(i => i + 1);
  listReminders: any[] = [ 
    {
      text: 'this is my reminder',
      day: 2,
      color: '#6610f2',
      hour: 4
    },
    {
      text: 'an task important',
      day: 2,
      color: '#0dcaf0',
      hour: 6
    },
    {
      text: 'hello reminder :)',
      day: 2,
      color: '#20c997',
      hour: 0
    },
    {
      text: 'anything else',
      day: 2,
      color: '#dc3545',
      hour: 10
    },
    // {
    //   text: 'wherever...',
    //   day: 2,
    //   color: '#20c997',
    //   hour: 4
    // },
    // {
    //   text: 'other thing',
    //   day: 2,
    //   color: '#20c997',
    //   hour: 4
    // },
  ];

  constructor(private store: Store<{ reminders: any[], selectDay: number }>) {
    this.reminders$ = store.select('reminders');
    this.selectDay$ = store.select('selectDay');
    this.selectDay$.pipe().subscribe(
      s => {
        this.day = s;
        console.log('s', s)
      }
    ) 
  }
  clickOnReminder(reminder) {
    console.log('reminder', reminder)
  }

  ngOnInit(): void {
  }

}
