import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoGYM';
  usuario: User;
  cargando:boolean=true;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario)=>{
      setTimeout(()=>{/* El setTimeout es para que se tarde dos segundo simulando una conexion lenta de internet */
        this.cargando=false;  
        this.usuario=usuario;
      },2000);

    })
  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword('cesar.ariza@gmail.com','123456789')
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}