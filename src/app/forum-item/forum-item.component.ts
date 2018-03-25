import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.scss']
})
export class ForumItemComponent implements OnInit {

  @Input() topic = "Topic";
  @Input() type = "Type";
  @Input() replies = "Replies";
  @Input() author = "Author";
  @Input() date = "Date";

  constructor() { }

  ngOnInit() {
  }

}
