import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './Component/create/create.component';
import { FilterComponent } from './Component/filter/filter.component';
import { DelPutComponent } from './Component/del-put/del-put.component';
import { NovedadesComponent } from './Component/novedades/novedades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,

    CreateComponent,
     FilterComponent,
     DelPutComponent,
     NovedadesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
