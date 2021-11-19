import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrontPageComponent } from './component/front-page/front-page.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { EditDetailsComponent } from './component/edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    EditDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
