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
  datosCorrectos: boolean=true;
  textoError:string='';

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
    if(this.formularioLogin.valid){
      this.datosCorrectos=true;
    this.afAuth.auth.signInWithEmailAndPassword(this.formularioLogin.value.correo, this.formularioLogin.value.contrasena)
    .then((usuario)=>{
      console.log(usuario)
    }).catch((error)=>{
      this.datosCorrectos=false;
      this.textoError=error.message;
    })
  }else{
    this.datosCorrectos=false;
    this.textoError='Por favor verifique la información sea correcta!';
  }
  }

}
