import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminAuthService } from './admin-login/admin-auth.service';
import { AdminAuthGuard } from './admin-login/admin-auth-guard.service';
import { GenresComponent } from './admin-dashboard/genres/genres.component';
import { BandsComponent } from './admin-dashboard/bands/bands.component';
import { TagsComponent } from './admin-dashboard/tags/tags.component';
import { PostsComponent } from './admin-dashboard/posts/posts.component';
import { GenresService } from './admin-dashboard/genres/genres.service';
import { GenreNewComponent } from './admin-dashboard/genres/genre-new/genre-new.component';
import { GenreEditComponent } from './admin-dashboard/genres/genre-edit/genre-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    GenresComponent,
    BandsComponent,
    TagsComponent,
    PostsComponent,
    GenreNewComponent,
    GenreEditComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    AdminAuthService,
    AdminAuthGuard,
    GenresService
  ]
})
export class AdminModule { }
