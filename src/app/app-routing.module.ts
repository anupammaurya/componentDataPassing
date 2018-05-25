import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";
import { SlaveComponent } from "./slave/slave.component";

const appRoutes: Routes = [
  {
    path: "child",
    component: ChildComponent
  },
  {
    path: "slave",
    component: SlaveComponent
  },
  {
    path: "parent",
    component: ParentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
