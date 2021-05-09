import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from '@angular/fire';
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";

import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { MySlicePipe } from './pipes/my-slice.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { BgDirective } from './directives/bg.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { MyForDirective } from './directives/my-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    UserEditComponent,
    LoginComponent,
    SignUpComponent,
    MySlicePipe,
    JoinPipe,
    BgDirective,
    MyIfDirective,
    MyForDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
