import { Component, OnInit, Input } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { CrudComponent } from "../crud/crud.component"
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  constructor() { }
  @Input() showAddress: boolean;
  @Input() rowObject: any[];
  @Input() colobject: any[];

  viewData:any[] = [];

  ngOnInit() {
    this.rowObject.forEach(ro => {
      this.viewData.push(new itemList (ro));
    });
    console.log(" this.viewData", this.viewData);
  }

  // editItem(){
  //   alert(JSON.stringify(this));
  // }
}


class itemList extends ParentComponent{
  id:number;
  firstname:string;
  lastname:string;
  address:string;
  contact:number;
  email:string;
  inputDisabled: boolean;
  editshow:boolean;

  constructor(data){
    super();
    if(data){
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.address = data.address;
        this.contact = data.contact;
        this.email = data.email;
        this.inputDisabled = true;
        this.editshow = false;
    }else{
      this.id = 66;
      this.firstname = "firstname";
      this.lastname = "lastname";
      this.address = "address";
      this.contact = 66;
      this.email = "email";
      this.inputDisabled = false;
      this.editshow = false;
    }
  }


  editItem() {
    alert(JSON.stringify(this));
    this.inputDisabled = false;
    this.editshow = true;
    // console.log("edit", JSON.stringify(this));
  }

  updateItem() {
    this.inputDisabled = true;
    this.editshow = false;
    console.log("update", JSON.stringify(this));
  }

  deleteItem(){

  }
}