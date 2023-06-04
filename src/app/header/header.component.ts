import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private router: Router
  ) {}

  goToUserForm = () => {
    console.log(environment.auth);
    console.log(this.document.location.origin);
    // this.router.navigate(['/userForm']);
  };
}
