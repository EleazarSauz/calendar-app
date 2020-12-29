import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  listDays: any = [29,30,...Array(31).keys(), 0,1];
  month: string = 'December'

  constructor() { }

  onClickDay(day: number) {
    console.log('day', day + 1)
  }

  ngOnInit(): void {
  }

}
