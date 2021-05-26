import { Component, Input, OnInit } from '@angular/core';

interface categoryOptions {
  imageUrl: string;
  categoryName: string;
}

@Component({
  selector: 'app-card-category-menu',
  templateUrl: './card-category-menu.component.html',
  styleUrls: ['./card-category-menu.component.scss'],
})
export class CardCategoryMenuComponent implements OnInit {
  @Input() options: any = [];
  @Input() menuTitle: string = 'Title goes here';
  @Input() headerLinkTitle = 'View All';
  @Input() headerLink = '#';

  constructor() {}

  ngOnInit(): void {}
}
