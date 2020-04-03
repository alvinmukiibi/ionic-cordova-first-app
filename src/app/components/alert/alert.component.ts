import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  constructor(public alertController: AlertController) {}

  public async presentAlert() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message",
      // buttons: ["Cancel", "Open"],
      // inputs: [
      //   {
      //     name: "name1",
      //     type: "text",
      //     placeholder: "Placeholder 1",
      //   },
      // ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }
}
