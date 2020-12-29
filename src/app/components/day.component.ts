import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styles: []
})
export class DayComponent implements OnInit {
  hours: number[] = [...Array(24).keys()];

  listReminders: number[] = [2,5,9,13,17]

  constructor() { }

  ngOnInit(): void {
  }

}
