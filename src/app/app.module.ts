import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FullCalendarModule} from '@fullcalendar/angular'; // must go before plugins
import {AppComponent} from './app.component';
import {ButtonComponent} from './shared/button/button.component';
import {ModalComponent} from './shared/modal/modal.component';
import {TableComponent} from './shared/table/table.component';


@NgModule({
  imports: [BrowserModule, FormsModule,FullCalendarModule],
  declarations: [AppComponent, ButtonComponent, ModalComponent,TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
