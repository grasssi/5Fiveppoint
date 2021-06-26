import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(i:any){
    this.users.splice(i,1);
    localStorage.setItem('registration',JSON.stringify(this.users))
  }
}
