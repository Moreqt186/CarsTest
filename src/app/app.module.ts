import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueueCarsComponent } from './queue-cars/queue-cars.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { ModalCarComponent } from './modal-car/modal-car.component';
import {CompleteCarsComponent} from './complete-cars/complete-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueCarsComponent,
    CompleteCarsComponent,
    ModalCarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalCarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
