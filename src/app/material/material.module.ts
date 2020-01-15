import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatGridListModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatGridListModule
];

@NgModule({
 
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
