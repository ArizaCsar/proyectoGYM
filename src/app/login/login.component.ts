import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
  formularioLogin:FormGroup;

  constructor(public formBuilder: FormBuilder, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.formularioLogin=this.formBuilder.group({
      correo:['', Validators.compose([
        Validators.required, Validators.email
      ])],
      contrasena:['',Validators.required]
    });
  }

  ingresar(){
    this.afAuth.auth.signInWithEmailAndPassword(this.formularioLogin.value.correo, this.formularioLogin.value.contrasena)
    .then((usuario)=>{
      console.log(usuario)
    })
  }

}
