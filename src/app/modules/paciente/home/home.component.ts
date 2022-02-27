import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private security: SecurityService) {
    this.security.checkLogin()
  }

  ngOnInit(): void {
  }

}
