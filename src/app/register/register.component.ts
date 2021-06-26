import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emaill: string='';
  pwd: string='';

  constructor() { }

  ngOnInit(): void {
  }
  registerFunction() {
    //creation d'un objet
    if (this.emaill == '' && this.pwd == '') {
      console.log("variable vide")
    } else {


      const curentRigestration = {
        email: this.emaill,
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
  findFunction(a: string, b: string) {

    console.log("find=", this.registerFunction());
    console.log("a=", a)
    const found = this.registerFunction();
    console.log("found=", found)
  }

}
function n1(n1: any) {
  throw new Error('Function not implemented.');
}


