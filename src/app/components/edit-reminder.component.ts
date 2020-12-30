import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { edit, remove } from '../redux/reminders.actions'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styles: []
})
export class EditReminderComponent implements OnInit {
  reminders$: Observable<any>
  selectDay$: Observable<any>;
  colors: string[] = ['#dc3545','#6610f2','#20c997','#0dcaf0'];
  listDays: any = [29, 30, ...Array(31).keys(), 0, 1].map(i => i + 1);
  hours: number[] = [...Array(24).keys()];

  constructor(
    private store: Store<{ reminders: any[], selectDay: number }>,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    ) {
    this.reminders$ = store.select('reminders');
    this.selectDay$ = store.select('selectDay');
  }

  
  onSubmit(f: NgForm) {
    
    this.selectDay$.pipe().subscribe(
      day => this.activatedRoute.params.subscribe(({ id }) => this.store.dispatch(edit({ ...f.value, day, id })))
    )
  }

  clickOnDelete() {
    this.activatedRoute.params.subscribe(({ id }) => this.store.dispatch(remove({id})));
  }

  ngOnInit(): void {
  }

}
