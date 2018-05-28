import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public colobject = ["firstname", "lastname", "address", "contact"];
  rowObject = [
    { 
      id: 1,
      firstname: "Swarup1",
      lastname: "Sharma",
      address: "Delhi",
      contact: "258012",
      email: "kubernates@ac.com"
    },
    {
      id: 2,
      firstname: "Swarm1",
      lastname: "Pujari",
      address: "Mumbai",
      contact: "258012",
      email: "anupam@ac.com"
    },
    {
      id: 3,
      firstname: "Kubernates1",
      lastname: "Linux",
      address: "Delhi",
      contact: "258012",
      email: "kubernates@ac.com"
    },
    {
      id: 4,
      firstname: "Docker1",
      lastname: "Lome",
      address: "Delhi",
      contact: "258012",
      email: "anil@ac.com"
    }
  ];

}
