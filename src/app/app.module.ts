import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuilderComponent } from './components/builder/builder.component';

@NgModule({
  declarations: [AppComponent, BindingComponent, BuilderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
