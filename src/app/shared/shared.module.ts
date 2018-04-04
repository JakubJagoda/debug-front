import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './providers/auth/auth.service';
import { AuthGuardService } from './providers/guards/auth-guard.service';
import { AuthApiService } from './providers/api/auth-api.service';
import { EmployeesApiService } from './providers/api/employees-api';
import { MaterialDesignModules } from '../angular-material';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ...MaterialDesignModules,
    SwiperModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ...MaterialDesignModules,
    SwiperModule,
  ],
  providers: [
    AuthApiService,
    AuthService,
    AuthGuardService,
    EmployeesApiService
  ]
})
export class SharedModule { }
