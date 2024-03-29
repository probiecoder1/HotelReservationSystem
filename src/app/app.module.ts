import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { FirestoreService } from './firestore.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomVacancyComponent } from './room-vacancy/room-vacancy.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookedReservationsComponent } from './booked-reservations/booked-reservations.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { OffersComponent } from './offers/offers.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { CustomerInfoFormComponent } from './customer-info-form/customer-info-form.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AllroomsComponent } from './allrooms/allrooms.component';
import { WarnComponent } from './warn/warn.component';
import { LogoutComponent } from './logout/logout.component';
import { MyroomsComponent } from './myrooms/myrooms.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomVacancyComponent,
    InvoiceComponent,
    BookRoomComponent,
    AdminDashboardComponent,
    BookedReservationsComponent,
    TransactionHistoryComponent,
    HomeComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    OffersComponent,
    CustomerInfoFormComponent,
    SignupComponent,
    LoginComponent,
    AllroomsComponent,
    WarnComponent,
    LogoutComponent,
    MyroomsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
