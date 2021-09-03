import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userData = {
    user: {
      username: ''
    }
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userData$.subscribe(data => {
      this.userData = data;
      //console.log(data);
    });
  }

  getReservations() {
    this.userService.getReservations();
  }
}
