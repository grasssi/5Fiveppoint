import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  email: string = '';
  pwd: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  registerFunction() {
    //creation d'un objet
    if (this.email == '' && this.pwd == '') {
      console.log("variable vide")
    } else {


      const curentRigestration = {
        email: this.email,
        password: this.pwd
      }

      //creation d'un tableau qui contient tous les enregistrements
      const registrations = JSON.parse(localStorage.getItem('registration') || '[]');
      registrations.push(curentRigestration);
      console.log("tab=", registrations);
      localStorage.setItem('registration', JSON.stringify(registrations));
      // console.log("tab=" ,mtab2);
      return registrations;
    }
  }

}

