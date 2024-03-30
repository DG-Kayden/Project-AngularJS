import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataPro: any;
  searching: string = '';
  filterProductList: any;
  showAll: boolean = false;
  constructor(private CommonService: CommonService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getLastProduct();
  }

  getLastProduct() {
    this.CommonService.listAllProduct().subscribe((res) => {
      this.dataPro = res;
    })
  }

  filterResults() {
    if (this.searching == null|| this.searching=='')  {
      return this.filterProductList= this.dataPro.slice(-8);
    } else {
      if (this.searching) {
        return this.filterProductList = this.dataPro.filter((item:any) => {
          return this.searching
            .toUpperCase()
            .split(' ')
            .every((v) => item.proName.toUpperCase().includes(v));
        });
      } else {
       return this.filterProductList = this.dataPro.slice(-8);
      }
    }

  }
}
