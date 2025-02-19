import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/Services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';


@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,RoutingModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _Auth=inject(AuthService);
  private readonly _Router=inject(Router);
   private readonly _ToastrService = inject(ToastrService);
  msgError:string=''; 
  isloading:boolean=false;
 
  //Validators
  
  registerform:FormGroup =new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
   email:new FormControl(null,[Validators.required,Validators.email]),
   password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
   rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
   phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])  
  } , this.confirmPassword
  );
  registerSubmit():void{
   if(this.registerform.valid){
     this.isloading=true;
     this._Auth.register(this.registerform.value).subscribe({
       next:(res)=>{
         console.log(res);
         this.isloading=true;
         this._ToastrService.success('Welcome', 'FreshCart', {timeOut: 2500});
         setTimeout(()=>{
           this._Router.navigate(['/auth/login'])
         },1000)
         
       },
       error:(err:HttpErrorResponse)=>{
         this.msgError=err.error.message;
         this._ToastrService.error(this.msgError, 'FreshCart', {timeOut: 3000});
       console.log(err);
         this.isloading=false;
       }
     })
   }
   else{
     
     this.registerform.markAllAsTouched();
     this.registerform.setErrors({mismatch:true})
   }
  }
 //  AbstractControl=>FormGroup Or FormControl
  confirmPassword(g :AbstractControl){
   if(g.get('password')?.value=== g.get('rePassword')?.value){
     return null
   }
   else{
     return {mismatch:true}
   }
  }
  CheckFieldInvalid(InputName: string): boolean {
    const Check = this.registerform.get(InputName);
    return Check ? Check.invalid && (Check.touched || Check.dirty) : false;
}

CheckFieldValid(InputName: string): boolean {
    const Check = this.registerform.get(InputName);
    return Check ? Check.valid && (Check.touched || Check.dirty) : false;
}
  
}
