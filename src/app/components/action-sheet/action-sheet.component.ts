import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-action-sheet",
  templateUrl: "./action-sheet.component.html",
  styleUrls: ["./action-sheet.component.scss"],
})
export class ActionSheetComponent implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  public async presentActionSheet() {
    let actionSheet = await this.actionSheetController.create({
      header: "Actions",
      animated: true,
      mode: "md",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Play",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnInit() {}
}
