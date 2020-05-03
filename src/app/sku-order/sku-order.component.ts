import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sku-order',
  templateUrl: './sku-order.component.html',
  styleUrls: ['./sku-order.component.css']
})
export class SkuOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private errorMessage: string;

  addFieldValue() {
    if (this.newAttribute.sku == null) {
      this.errorMessage = "You must enter a sku.";
      return;
    }
    else if (this.newAttribute.qty == "0" || this.newAttribute.qty == null) {
      this.errorMessage = "You must enter a quantity.";
      return;
    }
    else if (this.newAttribute.reason == null) {
      this.errorMessage = "You must enter a reason.";
      return;
    }
    else {
      this.errorMessage = "";
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  //data1 = ["**Restricted-unavailable for request", "", "", "" , "", "", "", "", ""]
  data1 = ["Costume", "Test", "Test", "84", "25", "2", "14", "0", "0"]
}