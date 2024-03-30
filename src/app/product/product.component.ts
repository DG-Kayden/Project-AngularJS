import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataPro: any;
  cardId: any;

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.cardId = params.get('id');
      this.listProductByCatId(this.cardId);
    });
  }

  listProductByCatId(id: any): void {
    this.commonService.listProductByCat(id).subscribe((res) => {
      this.dataPro = res;
    });
  }
}
