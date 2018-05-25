import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CrudData } from "./crudData"
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputDisabled:boolean;
  editshow:boolean;

  crudData: CrudData;
  @Output() initdataList = new EventEmitter();

  initdata(data) {
    if (data) {
      this.crudData = {
        "id": data.id,
        "firstname": data.firstname,
        "lastname": data.lastname,
        "address": data.address,
        "contact": data.contact,
        "email": data.email,
        "inputDisabled": true,
        "editshow": true
      }
    }
    else {
      this.crudData = {
        "id": 1,
        "firstname": "firstname",
        "lastname": "lastname",
        "address": "address",
        "contact": 12345,
        "email": "email",
        "inputDisabled": false,
        "editshow": false
      }
    }
    // this.initdataList.emit(this.crudData);
    console.log("crudData",this.crudData);
    return this.crudData;
  }


  editItem() {
    alert(JSON.stringify(this));
    this.inputDisabled = false;
    this.editshow = false;
    // console.log("edit", JSON.stringify(this));
  }

  updateItem() {
    this.inputDisabled = true;
    this.editshow = true;
    console.log("update", JSON.stringify(this));
  }

  valueChanged(count){
    alert("calling CRUD");
    console.log("count", count); 
  }

}
