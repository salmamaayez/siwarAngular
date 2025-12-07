import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { ErrorMsgComponent } from '../../reusables/error-msg/error-msg.component';
import { AbstractControl,ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule,ErrorMsgComponent,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
errorClass:string="";
showError:boolean=false;
errorMsg:string="";
isSubmitting:boolean=false;
emailExisting:boolean=false;
registerForm:FormGroup;
constructor(private fb:FormBuilder,private registerService: RegisterService){
  this.registerForm=this.fb.group({
    name:["",Validators.required],
    email:["",[Validators.required,Validators.email,this.emaiExistsValidator()]],
    mobile:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    password:["",[Validators.required,Validators.minLength(6)]],
    passwordConfirm:["",Validators.required]},
    {validators:this.passwordMatchValidator}
)
  //delete the error once the user tapes smth
  this.registerForm.get('email')?.valueChanges.subscribe(()=>{
    this.emailExisting=false;
    const control=this.registerForm.get('email');
    if(!control )return;
    const errors=control.errors;
    if(errors&&errors['emailTaken']){
      delete errors['emailTaken'];
    if(Object.keys(errors).length===0){
      control.setErrors(null);
    }
    else{control.setErrors(errors);}}
  
    
  });




}

passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('passwordConfirm');

  if (!password || !confirmPassword) return null;

  return (password.value !== confirmPassword.value)?{ passwordMismatch: true }:null
    
};

 emaiExistsValidator(){    return (control: AbstractControl): ValidationErrors | null => {
      return this.emailExisting ? { emailTaken: true } : null;
    };}

  onSubmit(){
   // if(!this.registerForm.invalid){
   this.isSubmitting=true;
      console.log(this.registerForm.value);
      this.registerService.registerUser(this.registerForm.value).subscribe({
        next:(data)=>{
          console.log(data);
          this.showError=false;
          this.errorClass="";
          this.isSubmitting=false;
        },
        error:(err)=>{
          this.isSubmitting=false;
          this.showError = true;
        this.errorMsg = err?.error?.message || "Une erreur est survenue";
        switch(err.status){
          case 0:
            this.errorClass="error-network";
            break;
          case 400:
            this.errorClass="error-bad-request";
            this.registerForm.get('email')?.setErrors({emailTaken:true});
            this.emailExisting=true;
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
