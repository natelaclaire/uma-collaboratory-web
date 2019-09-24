import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, 
              private userService: UserService, 
              private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required],
          first_name: ['',Validators.required],
          last_name: ['',Validators.required],
          type: ['',Validators.required]
      });
  }

  ngOnInit() {
  } 

  register() {
      const val = this.form.value;

      if (val.email && val.password) {
          this.userService.register(val.email, val.password, val.first_name, val.last_name, val.type)
              .subscribe(
                  (data) => {
                    if (data.success) {
                      console.log("User is logged in");
                      this.router.navigateByUrl('/');
                    } else {
                      alert('Perhaps you are already registered?');
                    }
                      
                  }
              );
      }
  }

}