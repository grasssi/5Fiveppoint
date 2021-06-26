import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  email: string = '';
  pwd: string = '';

  index: any;
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor(private activatetRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.pwd = this.users[this.index].pwd;
    this.email = this.users[this.index].email;

  }
  updateItem() {
    const updatetUser = {
      email: this.email,
      pwd: this.pwd
    }
    this.users.splice(this.index, 1,updatetUser);
    localStorage.setItem('registration', JSON.stringify(this.users))
this.router.navigate(['/listUser'])
  }


}

