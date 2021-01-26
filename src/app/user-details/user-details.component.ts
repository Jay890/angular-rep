import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  userDetails = "";
  seeDetails = false;
  constructor() {}

  ngOnInit(): void {}

  toggleDetails() {
    if (this.seeDetails == false) {
      this.seeDetails = true;
    } else {
      this.seeDetails = false;
    }
  }
}
