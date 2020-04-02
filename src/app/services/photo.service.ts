import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  public photos: Photo[] = [];

  currentImage: any; // declare an attribute on the class and since its typescript, give it a type of any

  constructor(private camera: Camera, private storage: Storage) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.currentImage = "data:image/jpeg;base64," + imageData;
        this.photos.unshift({
          data: this.currentImage
        });
        // Save all photos for later viewing
        this.storage.set("photos", this.photos);
      },
      err => {
        console.log("Camera Issue: " + err);
      }
    );
  }

  // function for load on init

  loadSaved() {
    this.storage.get("photos").then(photos => {
      this.photos = photos || [];
    });
  }
}

class Photo {
  data: any;
}
