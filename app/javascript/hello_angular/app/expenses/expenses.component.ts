import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  categories = ['Food', 'Home', 'Travel', 'Car'];
  expenses = [];
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
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getCategories();
    this.expenseForm.patchValue({ date: this.todayDate });
    this.getExpenses(this.todayDate);
  }

  getCategories() {
    this.dataService.getCategories()
      .subscribe(options => { 
        this.categories = options;
        this.expenseForm.patchValue({ category: this.categories[0] });
      });
  }

  getExpenses(currentDate) {
    this.dataService.getExpenses()
      .subscribe(expenses => {
        this.expenses = expenses.filter(e => e.date === currentDate).reverse();
      });
  }

  addExpense(currentDate) {
    this.dataService.addExpense(this.expenseForm.value)
      .subscribe(expenses => {
        this.expenses = expenses.filter(e => e.date === currentDate).reverse();
      });
  }

  logout() {
    this.userService.clearUserId();
    this.router.navigate(['']);
  }
}
