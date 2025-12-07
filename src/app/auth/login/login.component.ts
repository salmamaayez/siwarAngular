import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ErrorMsgComponent } from '../../reusables/error-msg/error-msg.component';
import { AbstractControl,ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [RouterLink,ErrorMsgComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:true,
})
export class LoginComponent {
errorClass:string="";
showError:boolean=false;
errorMsg:string="";
isLogging:boolean=false;
loginForm:FormGroup;
constructor(private fb:FormBuilder,private loginService: LoginService){
  this.loginForm=this.fb.group({
    email:["",[Validators.required,Validators.email,]],
    password:["",[Validators.required,Validators.minLength(6)]],},
  )}
  //delete the error once the user tapes smth


  onLogin(){
   // if(!this.registerForm.invalid){
   this.isLogging=true;
      console.log(this.loginForm.value);
      this.loginService.loginUser(this.loginForm.value).subscribe({
        next:(data: any)=>{
          console.log(data);
          this.showError=false;
          this.errorClass="";
          this.isLogging=false;
        },
        error:(err: { error: { message: string; }; status: any; })=>{
          this.isLogging=false;
          this.showError = true;
        this.errorMsg = err?.error?.message || "Une erreur est survenue";
        switch(err.status){
          case 0:
            this.errorClass="error-network";
            break;
          case 400:
            this.errorClass="error-bad-request";
            break;
          case 401:
            this.errorClass="erroeEnauthorized";
            break;
          default:
            this.errorClass="error-default"
            break;
      
        }

          alert(err.error.message);
           setTimeout(() => this.showError = false, 3000);
        }
        
      });

    //}
  }
}

