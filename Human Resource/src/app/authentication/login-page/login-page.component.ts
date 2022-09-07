import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  active:any;
  constructor(private authservice: AuthService, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // username : ['admin@demo.com',[Validators.required, Validators.email]],
      // password : ['admindemo', Validators.required]
      username : ['',[Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }

  // firebase
  // email = "admin@oprup.net";
  // password = "admindemo";
  email = "";
  password = "";
  errorMessage = ''; // validation _error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/dashboard'])
         console.clear()
        }).catch((_error:any)=> {
          this._error = _error
          this.router.navigate(['/'])
        })
    }
  }

  validateForm(email:string, password:string) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

  //angular
  public loginForm! : FormGroup;
  public error:any = '';

  get form(){
    return this.loginForm.controls;
  }

  Submit(){
    if (

      //oprup
              //  (this.loginForm.controls['username'].value === "admin@oprup.net" && this.loginForm.controls['password'].value === "admindemo")

        //   (this.loginForm.controls['username'].value === "a.qadri@emdadatalatta.net" && this.loginForm.controls['password'].value === "a.qadri@1234")||
        //    (this.loginForm.controls['username'].value === "h.mohammad@emdadatalatta.net" && this.loginForm.controls['password'].value === "h.mohammad@1234")
        // || (this.loginForm.controls['username'].value === "h.alqahtani@emdadatalatta.net" && this.loginForm.controls['password'].value === "h.alqahtani@1234")
        // || (this.loginForm.controls['username'].value === "k.al-dosari@emdadatalatta.net" && this.loginForm.controls['password'].value === "k.al-dosari@1234")
        // || (this.loginForm.controls['username'].value === "a.alqahtani@emdadatalatta.net" && this.loginForm.controls['password'].value === "a.alqahtani@1234")
        // || (this.loginForm.controls['username'].value === "hr.maskan@gmail.com" && this.loginForm.controls['password'].value === "hr.maskan@1234")
        // || (this.loginForm.controls['username'].value === "a.alamri@emdadatalatta.net" && this.loginForm.controls['password'].value === "a.alamri@1234")
        // || (this.loginForm.controls['username'].value === "o.sheha@emdadatalatta.net" && this.loginForm.controls['password'].value === "o.sheha@1234")
        // || (this.loginForm.controls['username'].value === "m.said@emdadatalatta.net" && this.loginForm.controls['password'].value === "m.said@1234")
        // || (this.loginForm.controls['username'].value === "n.sameer@emdadatalatta.net" && this.loginForm.controls['password'].value === "n.sameer@1234")
        // || (this.loginForm.controls['username'].value === "maram.operation@emdadatalatta.net" && this.loginForm.controls['password'].value === "maram.operation@1234")
        // || (this.loginForm.controls['username'].value === "f.alhatem@emdadatalatta.net" && this.loginForm.controls['password'].value === "f.alhatem@1234")
        // || (this.loginForm.controls['username'].value === "s.alruwaished@emdadatalatta.net" && this.loginForm.controls['password'].value === "s.alruwaished@1234")
        // || (this.loginForm.controls['username'].value === "m.ali@navaservices.net" && this.loginForm.controls['password'].value === "m.ali@1234")
        // || (this.loginForm.controls['username'].value === "a.alharbi@emdadatalatta.net" && this.loginForm.controls['password'].value === "a.alharbi@1234")
        // || (this.loginForm.controls['username'].value === "abobaker@emdadatalatta.net" && this.loginForm.controls['password'].value === "abobaker@1234")
        // || (this.loginForm.controls['username'].value === "husam@emdadatalatta.net" && this.loginForm.controls['password'].value === "husam@1234")

        // || (this.loginForm.controls['username'].value === "a@oprup.net" && this.loginForm.controls['password'].value === "111111")


        //etmar

        // (this.loginForm.controls['username'].value === "a.alkaabi@etmar.com" && this.loginForm.controls['password'].value === "a.alkaabi@1234")
        //   || (this.loginForm.controls['username'].value === "sultan@etmar.com" && this.loginForm.controls['password'].value === "sultan@1234")

        (this.loginForm.controls['username'].value === "emad@oprup.com" && this.loginForm.controls['password'].value === "emad@1234")
        || (this.loginForm.controls['username'].value === "ahmad@oprup.com" && this.loginForm.controls['password'].value === "ahmad@1234")
        || (this.loginForm.controls['username'].value === "jeddah@alfaddagroup.com" && this.loginForm.controls['password'].value === "jeddah@1234")
        || (this.loginForm.controls['username'].value === "abdallah@oprup.com" && this.loginForm.controls['password'].value === "abdallah@234")
        || (this.loginForm.controls['username'].value === "omar@oprup.com" && this.loginForm.controls['password'].value === "omar@234")
        || (this.loginForm.controls['username'].value === "abusaud@oprup.com" && this.loginForm.controls['password'].value === "abusaud@234")
        || (this.loginForm.controls['username'].value === "hilal@alodood.com" && this.loginForm.controls['password'].value === "hilal@234")
        // oprup jordan
          // (this.loginForm.controls['username'].value === "aabed@oprup.com" && this.loginForm.controls['password'].value === "aabed@1234")
          // || (this.loginForm.controls['username'].value === "osama@oprup.com" && this.loginForm.controls['password'].value === "osama@1234")


    )
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.error = "Please check username and passowrd"
    }
  }

}
