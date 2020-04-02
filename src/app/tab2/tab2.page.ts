import { Component } from '@angular/core';
// import the Camera and Options components
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  currentImage: any; // declare an attribute on the class and since its typescript, give it a type of any

  // initialise a camera variable to the Camera component
  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(imageData => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, err => {
      console.log("Camera Issue: " + err);
    });
  }

}
