import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TakeUntilDestroy } from 'ng-rxjs-take-until-destroy';

import { AuthService } from '../shared/providers/auth/auth.service';

@Component({
  selector: 'dbg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public isSignOutVisible = false;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.getUserData().subscribe((userData) => {
      this.isSignOutVisible = userData !== null;
    });
  }

  public signOut() {
    this.authService.signOut();
    this.router.navigate(['/']);
  }

  @TakeUntilDestroy
  private getUserData() {
    return this.authService.getUserData();
  }

}
