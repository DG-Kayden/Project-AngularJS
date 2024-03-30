import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataCat: any
  isAction = false;
  objCat = {
    id: '',
    catName: ''
  }
  constructor(private CommonService: CommonService) {

  }

  ngOnInit(): void {
    this.getLastCategory();
  }
  addNewCategory(formValue: any) {
    console.log(formValue);
    this.CommonService.createCategory(formValue).subscribe((res) => {
      console.log("Thêm thành công");
      this.getLastCategory();
      this.objCat.catName = '';
    })
  }

  getLastCategory() {
    this.CommonService.listAllCategory().subscribe((res) => {

      this.dataCat = res;
    })
  }

  // lấy dữ liệu để sữa
  editCat(dataCat: any) {
    this.isAction = true;
    this.objCat = dataCat;
  }

  updateCat(dataCat: any) {
    this.isAction = true;
    console.log(dataCat);
    this.CommonService.updateCategory(this.objCat).subscribe((res) => {
      this.getLastCategory();
      this.objCat.catName = '';
    })
  }


  deleteCat(dataCat: any) {
    console.log(dataCat);
    this.CommonService.deleteCategory(dataCat).subscribe((res) => {
      this.getLastCategory();
    })
  }



}
