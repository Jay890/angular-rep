import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// import is typescript feature
import { FormsModule } from "@angular/forms";

// import the other component to root file
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
