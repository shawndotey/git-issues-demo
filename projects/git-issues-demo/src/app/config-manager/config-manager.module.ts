import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigManagerComponent } from './config-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ConfigManagerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    StoreModule,
    BrowserAnimationsModule
  ],
  exports: [
    ConfigManagerComponent
  ]
})
export class ConfigManagerModule { }
