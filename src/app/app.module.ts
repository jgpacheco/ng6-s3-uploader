import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { S3UploaderModule } from 'ngx-s3-uploader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // S3UploaderModule.forRoot({
    //   region: 'us-east-1',
    //   bucket: 'upload-lms-knetikcloud-com',
    //   credentials: { identityPoolId: 'us-east-1:34258b51-de84-445a-ad5c-72c4db508cc4' },
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
