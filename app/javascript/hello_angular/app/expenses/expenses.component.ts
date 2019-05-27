import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs/operators';

import { DataService } from '../data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-expenses',
  template: require('./expenses.component.html'),
  styles: [require('./expenses.component.css').toString()],
  providers: [DatePipe]
})
export class ExpensesComponent implements OnInit {
  userId = this.userService.userId;
  todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  expenseForm = this.fb.group({
    date: [''],
    title: [''],
    category: [''],
    amount: [''],
    currency: [{ value: 'BYN', disabled: true }]
  });
  
  constructor(private userService: UserService,
              private datePipe: DatePipe,
              private dataService: DataService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.expenseForm.patchValue({ date: this.todayDate });
  }
}
