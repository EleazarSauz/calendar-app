import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styles: []
})
export class AddReminderComponent implements OnInit {

  colors: string[] = ['#dc3545','#6610f2','#20c997','#0dcaf0'];
  hours: number[] = [...Array(24).keys()];
  constructor() { }

  
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

  ngOnInit(): void {
  }

}
