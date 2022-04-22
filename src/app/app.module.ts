import { appReducer } from './store/user/index';
import { MaterialModule } from './material/material.module';
import { StoreModule } from '@ngrx/store';
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
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './components/pages/home/home.component';
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
    FormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
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
    MatListModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    // EffectsModule.forRoot(AppEffects)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
function AppEffects(AppEffects: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

