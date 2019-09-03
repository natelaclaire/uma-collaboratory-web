import { Component } from '@angular/core';
import { UserService } from './user.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userData = {
    user : {
      username : ''
    }
  };
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.userService.userData$.subscribe(
      data => {
        this.userData = data; 
        //console.log(data);
      });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/