import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordComponent} from "./word/word.component";
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { BoolComponent } from './bool/bool.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    EmployeeDashboardComponent,
    BoolComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
