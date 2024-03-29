import { PhotoService } from "./../services/photo.service";
import { Component } from "@angular/core";
// import the Camera and Options components

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  // initialise a camera variable to the Camera component
  constructor(public photoService: PhotoService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.photoService.loadSaved();
  }
}
