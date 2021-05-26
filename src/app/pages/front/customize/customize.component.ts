import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { BaseComponent } from 'src/app/base-component';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  design_bike = BaseComponent.design_bike;
  constructor(private API: ApiService) {}
  wheels: any = [];
  frame: any = [];
  forks: any = [];
  stems: any = [];
  seat: any = [];
  sprocket: any = [];

  ngOnInit(): void {
    this.getWheels();
    this.getFrames();
    this.getForks();
    this.getStems();
    this.getSeat();
    this.getSprocket();
  }

  getWheels() {
    this.API.post('/inventory/get-by-category', {
      category_id: 12,
    }).subscribe((data) => {
      this.wheels = data.devMessage;
    });
  }

  getFrames() {
    this.API.post('/inventory/get-by-category', {
      category_id: 13,
    }).subscribe((data) => {
      this.frame = data.devMessage;
    });
  }

  getForks() {
    this.API.post('/inventory/get-by-category', {
      category_id: 15,
    }).subscribe((data) => {
      this.forks = data.devMessage;
    });
  }

  getStems() {
    this.API.post('/inventory/get-by-category', {
      category_id: 18,
    }).subscribe((data) => {
      this.stems = data.devMessage;
    });
  }

  getSeat() {
    this.API.post('/inventory/get-by-category', {
      category_id: 21,
    }).subscribe((data) => {
      this.seat = data.devMessage;
    });
  }

  getSprocket() {
    this.API.post('/inventory/get-by-category', {
      category_id: 22,
    }).subscribe((data) => {
      this.sprocket = data.devMessage;
    });
  }
}
