import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styles: []
})
export class DayComponent implements OnInit {
  hours: number[] = [...Array(24).keys()];

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

  constructor() { }
  clickOnReminder(reminder) {
    console.log('reminder', reminder)
  }

  ngOnInit(): void {
  }

}
