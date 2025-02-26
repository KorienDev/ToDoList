import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const random_index = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  imports: [ ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  selectedUser = DUMMY_USERS[random_index];
  
  onSelectUser(){
    const random_index = Math.floor(Math.random() * DUMMY_USERS.length);
    console.log( this.selectedUser.id, this.selectedUser.avatar);
    this.selectedUser = DUMMY_USERS[random_index];
  }

  // get imagePath() {
  //   return this.selectedUser.avatar;
  // }


}
