import { Component, OnInit } from "@angular/core";
import { runInThisContext } from "vm";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  username = "";
  allowResetName = false;
  constructor() {}

  checkEmpty() {
    if (this.username.length >= 1) {
      this.allowResetName = true;
    }
  }

  ngOnInit(): void {}

  showUser() {
    this.username = "";
    this.allowResetName = false;
  }
}
