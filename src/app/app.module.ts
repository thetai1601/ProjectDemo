
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AnnouncementComponent } from './components/navigation/announcement/announcement.component';
import { SliderComponent } from './components/navigation/slider/slider.component';
import { CategoriesComponent } from './components/navigation/categories/categories.component';
import { CategoriesItemComponent } from './components/navigation/categories-item/categories-item.component';
import { NewsletterComponent } from './components/navigation/newsletter/newsletter.component';
import { ProductComponent } from './components/navigation/product/product.component';
import { ProductsComponent } from './components/navigation/products/products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AnnouncementComponent,
    SliderComponent,
    CategoriesComponent,
    CategoriesItemComponent,
    NewsletterComponent,
    ProductComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
