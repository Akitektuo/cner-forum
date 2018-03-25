import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  numbers = [];

  constructor() { 
    for (let i = 1; i < 100; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

  clickSearch() {
    console.log("Search clicked!");
  }

  clickNewThread() {
    console.log("New thread!");
  }

}
