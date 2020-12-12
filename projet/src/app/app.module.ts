import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SalleComponent } from './salle/salle.component';
import { ControllerSalleComponent } from './controller-salle/controller-salle.component';
import { PosteComponent } from './poste/poste.component';
import { DetailsPosteComponent } from './details-poste/details-poste.component';
import {HttpClientModule} from '@angular/common/http';
import {SalleService} from './Services/SalleService/salle.service';
import {PosteService} from './Services/PosteService/poste.service';
import {UploadFilesComponent} from './uploadFile/UploadFiles.component';
import {UploadFileService} from './Services/FileService/UploadFile.service';


const appRoutes: Routes = [
  {
    path: 'salle', component: SalleComponent
  },
  {
    path: 'control', component: ControllerSalleComponent
  },
  {
    path: 'poste', component: PosteComponent
  },
  {
    path: 'home', component: HomeComponent
  }
  ];


// @ts-ignore
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AppComponent,
    SalleComponent,
    ControllerSalleComponent,
    PosteComponent,
    DetailsPosteComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SalleService, PosteService,UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
