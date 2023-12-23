import { TranslateService } from "@ngx-translate/core";
import { ActionSheetController } from "@ionic/angular";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { File, FileEntry } from "@awesome-cordova-plugins/file/ngx";
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: "app-image-picker",
  templateUrl: "./image-picker.component.html",
  styleUrls: ["./image-picker.component.scss"],
})
export class ImagePickerComponent implements OnInit {
  @Output() pickingImage = new EventEmitter<any>();
  @Input() attachType
  @ViewChild("fileInp") fileInput: ElementRef;
  selectedImage;
  pickedStringFile;

  constructor(
    public actionCtrl: ActionSheetController,
    private camera: Camera,
    private file: File,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    console.log(this.attachType)
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      correctOrientation: true,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // allowEdit:true,
    };
    this.camera
      .getPicture(options)
      .then((imageData) => {
        this.selectedImage = "data:image/jpeg;base64," + imageData;
        this.pickingImage.emit("data:image/jpeg;base64," + imageData);
      })
      .catch((err) => {
        console.log(err);
        this.fileInput.nativeElement.click();
        return false;
      });
  }
  async selectImage() {
    const actionSheet = this.actionCtrl.create({
      header: this.translate.instant("select Image Source"),
      buttons: [
        {
          text: this.translate.instant("Load from Gallary"),
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: this.translate.instant("Use Camera"),
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: this.translate.instant("Cancel"),
          role: this.translate.instant("cancel"),
        },
      ],
    });
    (await actionSheet).present();
  }

  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    console.log(pickedFile);
    let mimeType = pickedFile.name.split('.').pop();
    console.log("mimeType", mimeType)
    if (!pickedFile) {
      return;
    }
    let myReader: FileReader = new FileReader();
    myReader.onload = () => {
      const binaryString: any = myReader.result.toString();
      this.pickedStringFile = btoa(binaryString);
      this.pickingImage.emit({
        pickedStringFile: this.pickedStringFile,
        mimeType: mimeType,
      });
      this.selectedImage = URL.createObjectURL(pickedFile)
    };
    myReader.readAsBinaryString(pickedFile);
  }
}
