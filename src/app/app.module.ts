import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ToptitleComponent } from './toptitle/toptitle.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavnextComponent } from './sidenavnext/sidenavnext.component';
import { DatatableviewComponent } from './datatableview/datatableview.component';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ToptitleComponent,
    SidenavComponent,
    SidenavnextComponent,
    DatatableviewComponent

  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
