import { Component, OnInit, Input } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { CrudComponent } from "../crud/crud.component"
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent extends CrudComponent implements OnInit {
  constructor() { super() }
  @Input() showAddress: boolean;
  @Input() rowObject: any[];
  @Input() colobject: any[];

  viewData:any[] = [];

  ngOnInit() {
    this.rowObject.forEach(ro => {
      this.viewData.push(super.initdata(ro));
    });
    console.log(" this.viewData", this.viewData);
  }

  editItem(){
    alert(JSON.stringify(this));
  }
}
