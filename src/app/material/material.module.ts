import { NgModule } from '@angular/core';
import { MatSliderModule, } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


const MaterialComponents = [MatSliderModule, MatListModule, MatGridListModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
