import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  @Input() Title: string = 'Test App';
  constructor() {}

  ngOnInit(): void {}
}
