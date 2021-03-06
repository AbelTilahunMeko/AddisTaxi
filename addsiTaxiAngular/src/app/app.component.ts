import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .online{
      color:green
    }
  `]
})
export class AppComponent {
  allowedToTouch = false;
  fName: String = 'Abel Tilahun';
  departmentName: String = 'Software Engineering';
  serverStatus = 'there is no server';

  initialPhoneNUmber: any = 'please enter your number';

  userNameGotten: String = '';
  passwordGotten: String = '';

  userName: String = 'Abel';
  password: String = '1234';

  showString: String = 'Please fill in the forms';

  successfulEnter = false;

  serverStatusToShow: String = 'Online';
  onlineServerStatus = true;


  constructor() {
    setTimeout( () => {
      this.allowedToTouch  = true;
    }, 2000);

    this.serverStatusToShow = Math.random() > 0.5 ? 'online' : 'offline';

    if (this.serverStatusToShow === 'offline') {
      this.onlineServerStatus = false;
    } else {
      this.onlineServerStatus = true;
    }

  }
  sendUserInput(event: Event) {
    this.userNameGotten = (<HTMLInputElement>event.target).value.toString();
  }

  sendUserPassword(event: Event) {
    this.passwordGotten =  (<HTMLInputElement>event.target).value.toString();
  }

  displayAllInputs() {
    return this.showString;
  }

  successful() {
    console.log(this.userName.toString() + this.password.toString());
    console.log(this.passwordGotten.toString() + this.userNameGotten.toString());

    this.showString = this.userNameGotten.toString() + this.passwordGotten.toString() + this.initialPhoneNUmber.toString();
    if (this.userName.toString() === this.userNameGotten.toString() && this.password.toString() === this.passwordGotten.toString()) {
      return this.successfulEnter = true;
    } else {
      return false;
    }
    // return this.successfulEnter = true;
  }

  getColor() {
    if ( this.successfulEnter === true) {
        return 'green';
    } else {
      return 'red';
    }
  }
  seeTheUserInputs() {
    return this.userNameGotten.concat(this.passwordGotten.toString());
  }
  onCreateSomething() {
    return this.serverStatus = 'server was created';
  }

  // Creating a method bro
  getFName() {
    return this.fName;
  }

  getDepartment() {
    return this.departmentName;
  }

}
