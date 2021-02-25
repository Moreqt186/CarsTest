import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueueCarsComponent} from './queue-cars/queue-cars.component';
import {CompleteCarsComponent} from './complete-cars/complete-cars.component';


const routes: Routes = [
  {path: 'queue', component: QueueCarsComponent},
  {path: 'completed', component: CompleteCarsComponent},
  {path: '', redirectTo: 'queue', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
