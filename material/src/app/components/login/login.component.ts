import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.form)
    const username = this.form.value.username;
    const password = this.form.value.password;
    console.log(username)
    console.log(password)
    if (username == "airan" && password == "franco") {
      //redireccionmos al dashboeard
      this.fakeLoading()
    }
    else {
      // MEnsaje de error
      this.error()
      this.form.reset()
    }
  }
  error(){
    this._snackBar.open('User or password incorrect', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    // Redireccionamos al inicio
    this.loading = true;
    setTimeout(() => {
      this.loading = true;
    }, 1400);
  }

}
