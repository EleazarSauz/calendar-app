import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment } from '../redux/reminders.actions'

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styles: []
})
export class AddReminderComponent implements OnInit {
  reminders$: Observable<any>
  colors: string[] = ['#dc3545','#6610f2','#20c997','#0dcaf0'];
  hours: number[] = [...Array(24).keys()];

  constructor(private store: Store<{ reminders: any[] }>) {
    this.reminders$ = store.select('reminders');
  }

  
  onSubmit(f: NgForm) {
    this.store.dispatch(increment(f.value));
    console.log(f.value);
    console.log(f.valid);
  }

  ngOnInit(): void {
  }

}
