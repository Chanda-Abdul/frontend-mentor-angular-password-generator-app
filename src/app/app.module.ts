import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StrengthBarComponent } from './components/strength-bar/strength-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PasswordGenerationService } from './passwordGeneration.service';

@NgModule({
  declarations: [
    AppComponent,
    StrengthBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    NgxSliderModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [PasswordGenerationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
