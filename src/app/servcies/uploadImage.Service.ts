import { Injectable, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVariablesService } from './global-variables.service';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({ providedIn: 'root' })
export class UploadImageService {
  // @ViewChild('popover') popover;
  // selectedImage;
  // constructor(
  //   public actionCtrl: ActionSheetController,
  //   private camera: Camera,
  //   private globals: GlobalVariablesService,
  //   private translate: TranslateService
  // ) { }
  // pickImage(sourceType,pageThis,target:string) {
  //   const options: CameraOptions = {
  //     quality: 50,
  //     correctOrientation: true,
  //     sourceType: sourceType,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   };
  //   this.camera
  //     .getPicture(options)
  //     .then((imageData) => {
  //       this.selectedImage = "data:image/jpeg;base64," + imageData;
  //       let realData = this.selectedImage.split(",")[1];
  //       pageThis[target]=this.selectedImage 
  //     })
  //     .catch((err) => {
  //       return false;
  //     });
  // }



  // async selectImage(pageThis,target:string) {
  //   let inputDefault;
  //    inputDefault = [
  //       {
  //         text: this.translate.instant("Load from Gallary"),
  //         handler: () => {
  //           this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY,pageThis,target);
  //         },
  //       },
  //       {
  //         text: this.translate.instant("Use Camera"),
  //         handler: () => {
  //           this.pickImage(this.camera.PictureSourceType.CAMERA,pageThis,target);
  //         },
  //       },
  //       {
  //         text: this.translate.instant("Cancel"),
  //         role: this.translate.instant("cancel"),
  //       },
  //     ]
    
  //   const actionSheet = this.actionCtrl.create({
  //     header: this.translate.instant("select Image Source"),
  //     buttons: inputDefault,
  //   });
  //   (await actionSheet).present();
  // }
}