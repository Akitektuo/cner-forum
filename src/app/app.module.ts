import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatListModule
} from '@angular/material'
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { ForumComponent } from './forum/forum.component';
import { MapComponent } from './map/map.component';
import { ForumItemComponent } from './forum-item/forum-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    MapComponent,
    ForumItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    routes,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
