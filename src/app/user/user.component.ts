import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  username = "";
  allowResetName = false;
  constructor() {}

  checkEmpty(event: any) {
    this.username = event.target.value;
    if (this.username.length >= 1) {
      this.allowResetName = true;
    }
  }

  ngOnInit(): void {}

  showUser() {
    this.username = "";
  }
}
