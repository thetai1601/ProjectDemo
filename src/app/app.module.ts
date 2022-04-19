import { MaterialModule } from './material/material.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SliderComponent } from './components/header/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TrendingComponent } from './components/home/trending/trending.component';
import { ProductsComponent } from './components/home/products/products.component';
import { CommunicationsComponent } from './components/footer/communications/communications.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    TrendingComponent,
    ProductsComponent,
    CommunicationsComponent,
    TestComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
