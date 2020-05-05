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
      var data1 = ["Toy Boat", "Toys", "Kids", "25", "$6.00", "2", "10", "20", "5"]
      var data2 = ["Desk", "Furniture", "Home", "10", "$120.00", "7", "0", "10", "2"]
      var data3 = ["Laptop", "Electronics", "Elec", "15", "$800.00", "0", "0", "30", "0"]
      var data4 = ["Pepsi", "Food", "Food", "100", "$1.00", "0", "30", "100", "30"]

    if (this.newAttribute.sku == null) {
      this.errorMessage = "You must enter a sku.";
      return;
    }
    else if (this.newAttribute.qty == "0" || this.newAttribute.qty == null) {
      this.errorMessage = "You must enter a quantity.";
      return;
    }
    else if (this.newAttribute.date == null) {
      this.errorMessage = "You must enter a requested delivery date.";
      return;
    }
    else {
      this.errorMessage = "";

      if(this.newAttribute.sku == 45)
      {
        this.newAttribute.desc = data1[0];
        this.newAttribute.dept = data1[1];
        this.newAttribute.clas = data1[2];
        this.newAttribute.warehouse = data1[3];
        this.newAttribute.price = data1[4];
        this.newAttribute.damaged = data1[5];
        this.newAttribute.transit = data1[6];
        this.newAttribute.capacity = data1[7];
        this.newAttribute.storeInv = data1[8];
        this.fieldArray.push(this.newAttribute)
      }
      else if(this.newAttribute.sku == 321)
      {
        this.newAttribute.desc = data2[0];
        this.newAttribute.dept = data2[1];
        this.newAttribute.clas = data2[2];
        this.newAttribute.warehouse = data2[3];
        this.newAttribute.price = data2[4];
        this.newAttribute.damaged = data2[5];
        this.newAttribute.transit = data2[6];
        this.newAttribute.capacity = data2[7];
        this.newAttribute.storeInv = data2[8];
        this.fieldArray.push(this.newAttribute)
      }
      else if(this.newAttribute.sku == 777)
      {
        this.newAttribute.desc = data3[0];
        this.newAttribute.dept = data3[1];
        this.newAttribute.clas = data3[2];
        this.newAttribute.warehouse = data3[3];
        this.newAttribute.price = data3[4];
        this.newAttribute.damaged = data3[5];
        this.newAttribute.transit = data3[6];
        this.newAttribute.capacity = data3[7];
        this.newAttribute.storeInv = data3[8];
        this.fieldArray.push(this.newAttribute)
      }
      else if(this.newAttribute.sku == 256)
      {
        this.newAttribute.desc = data4[0];
        this.newAttribute.dept = data4[1];
        this.newAttribute.clas = data4[2];
        this.newAttribute.warehouse = data4[3];
        this.newAttribute.price = data4[4];
        this.newAttribute.damaged = data4[5];
        this.newAttribute.transit = data4[6];
        this.newAttribute.capacity = data4[7];
        this.newAttribute.storeInv = data4[8];
        this.fieldArray.push(this.newAttribute)
      }
      else
      {
        this.errorMessage = "Sku not found.";
        this.newAttribute = {};
        return;
      }
      this.newAttribute = {};
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }


}