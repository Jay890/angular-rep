import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  //  `<app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No new server was created!";
  serverName = "TestServer";
  serverCreated = false;
  servers = ["Testserver", "Testserver2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
