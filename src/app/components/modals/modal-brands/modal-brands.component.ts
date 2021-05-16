import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { BrandsComponent } from 'src/app/pages/maintenance/brands/brands.component';
@Component({
  selector: 'app-modal-brands',
  templateUrl: './modal-brands.component.html',
  styleUrls: ['./modal-brands.component.scss'],
})
export class ModalBrandsComponent implements OnInit {
  @Input() brand_name = '';
  constructor(private API: ApiService) {}
  ngOnInit(): void {}

  saveBrand() {
    this.API.post('/brand/save', {
      brand_name: this.brand_name,
    }).subscribe((data) => {});
  }
}
