import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// import is typescript feature
import { FormsModule } from "@angular/forms";

// import the ServerComponent
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
