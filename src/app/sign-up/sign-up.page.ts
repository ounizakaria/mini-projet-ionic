import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  ionicForm: FormGroup;
  constructor( public formBuilder: FormBuilder,private authService:AuthenticationService,public router:Router) { }

  ngOnInit() {
    this.ionicForm= this.formBuilder.group({
      fullname:'',
      email:'',
      password:'',
    })
  }

  async Signup(){
    const user = await this.authService.registerUser(this.ionicForm.value.email,this.ionicForm.value.password ).catch((error)=>{
      console.log(error);
    })
    if(user){
      this.router.navigate(['/signin'])
    }else {
      console.log('provide correct value')
    }

  }

}
