import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;
  constructor( public formBuilder: FormBuilder,private authService:AuthenticationService,public router:Router) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email:'',
      password:'',
    })
  }
  async Signin(){
    const user = await this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password ).catch((error)=>{
      console.log(error);
    })
    if(user){
      this.router.navigate(['/home'])
    }else {
      console.log('provide correct value')
    }

  }

}
