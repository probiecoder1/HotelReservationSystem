import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomVacancyComponent } from './room-vacancy/room-vacancy.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OffersComponent } from './offers/offers.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllroomsComponent } from './allrooms/allrooms.component';
import { MyroomsComponent } from './myrooms/myrooms.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room-vacancy', component: RoomVacancyComponent },
  { path: 'book-room', component: BookRoomComponent },
  { path: 'admin', component: AdminDashboardComponent },
  {path: 'gallery', component: GalleryComponent},
  {path: 'invoice', component: InvoiceComponent },
  {path:'offers', component: OffersComponent},
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'allrooms', component: AllroomsComponent},
  {path:'myrooms', component: MyroomsComponent},
  {path: 'db', component: RoomVacancyComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path:'adminlogin', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
