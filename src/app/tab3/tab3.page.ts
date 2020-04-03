import { AlertComponent } from "./../components/alert/alert.component";
import { Component } from "@angular/core";
import { ActionSheetComponent } from "./../components/action-sheet/action-sheet.component";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
  providers: [ActionSheetComponent, AlertComponent],
})
export class Tab3Page {
  constructor(
    public actionSheet: ActionSheetComponent,
    public alert: AlertComponent
  ) {}
}
