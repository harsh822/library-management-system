import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AccountService } from '../../service/account.service';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log("Form",this.form.value);
    
    this.loading = true;

    Swal.fire({
      icon: 'info',
      title: 'Registration Successfull',
      text: 'Redirecting to login page!!',
      timer: 1000,
      showCancelButton: false,
      showConfirmButton: false
      // footer: '<a href="">Why do I have this issue?</a>'
    }).then(()=>{
      this.router.navigate(['../login']);
    })
    // Swal.fire('Login complete').then(()=>{
    // });
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your row has been deleted.",
    //   type: "success",
    //   timer: 3000
    //   },
    //   function () {
    //          location.reload(true);
             
    //   });
    // this.accountService
    //   .register(this.form.value)
    //   .pipe(first())
    //   .subscribe({
    //     next: () => {
    //       this.alertService.success('Registration successful', {
    //         keepAfterRouteChange: true,
    //       });
    //       this.router.navigate(['../login'], { relativeTo: this.route });
    //     },
    //     error: (error) => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     },
    //   });
  }
}
