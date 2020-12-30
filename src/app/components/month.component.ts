import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { change } from '../redux/select-day.actions';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  selectDay$: Observable<any>
  listDays: any = [29,30,...Array(31).keys(), 0,1].map(i => i+1);
  month: string = 'December'
  
  constructor(private store: Store<{ selectDay: number }>) {
    this.selectDay$ = store.select('selectDay');
  }


  onClickDay(day: number) {
    this.store.dispatch(change({day}))
    console.log('day', day + 1)
  }

  ngOnInit(): void {
  }

}
