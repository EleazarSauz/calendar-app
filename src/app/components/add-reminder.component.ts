import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { add } from '../redux/reminders.actions'

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styles: []
})
export class AddReminderComponent implements OnInit {
  reminders$: Observable<any>
  selectDay$: Observable<any>;
  colors: string[] = ['#dc3545','#6610f2','#20c997','#0dcaf0'];
  listDays: any = [29, 30, ...Array(31).keys(), 0, 1].map(i => i + 1);
  hours: number[] = [...Array(24).keys()];

  constructor(private store: Store<{ reminders: any[], selectDay: number }>) {
    this.reminders$ = store.select('reminders');
    this.selectDay$ = store.select('selectDay');
  }

  
  onSubmit(f: NgForm) {
    this.selectDay$.pipe().subscribe(
      day => this.store.dispatch(add({ ...f.value, day }))
    )
  }

  ngOnInit(): void {
  }

}
