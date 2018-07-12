import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public avatarUploaded(data): void {
    console.log('>>>>>>>>>>>>>>>>>>>.');
    console.log(data);
  }

  public avatarUploadError(/* error */): void {}
}
