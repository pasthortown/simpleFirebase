import { ProductoService } from './services/producto.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { ElementoComponent } from './components/producto/elemento/elemento.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductoListComponent,
    ElementoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
