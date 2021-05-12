import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {User} from '../user';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  id : number;
 users1:any;
 firstName:string;

 filters = {
  keyword: ''
}


  constructor(
    private service:UserService,  private router: Router) { }

    ngOnInit() :void{
      let resp=this.service.getUsersList();
      resp.subscribe((data)=>this.users1=data); 
 
     
    }
     findUserById(){
      let resp= this.service.getUserById(this.id);
  resp.subscribe((data)=>this.users1=data);
 }



deleteUser(id: number) {
  this.service.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.listUsers();
      },
      error => console.log(error));
} 

listUsers() {
  this.service.getUsersList().subscribe(
    data => this.users1 = this.filterUsers(data)
  )
}

selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(this.selectedDay);
  }
  filterUsers(users2: User[]) {
    return users2.filter((e) => {
      if(this.selectedDay == "firstName"){
      return e.firstName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }
    if(this.selectedDay == "city"){
      return e.city.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }

    if(this.selectedDay == "lastName"){
      return e.lastName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }
    if(this.selectedDay == "email"){
      return e.email.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }
    if(this.selectedDay == "state"){
      return e.state.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }
    if(this.selectedDay == "zipCode"){
      return e.zipCode.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }
    if(this.selectedDay == "country"){
      return e.country.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }
      /* return e.firstName.toLowerCase().includes(this.filters.keyword.toLowerCase())
       || e.city.toLowerCase().includes(this.filters.keyword.toLowerCase())
       || e.lastName.toLowerCase().includes(this.filters.keyword.toLowerCase())
       || e.email.toLowerCase().includes(this.filters.keyword.toLowerCase())
       || e.state.toLowerCase().includes(this.filters.keyword.toLowerCase())
       || e.zipCode.toLowerCase().includes(this.filters.keyword.toLowerCase())
       || e.country.toLowerCase().includes(this.filters.keyword.toLowerCase()); */
    })
  }
 
userDetails(id: number){
  this.router.navigate(['details', id]);
}

updateUser(id: number){
  this.router.navigate(['update', id]);
}

/* public deleteUser(id:number){
  let resp= this.service.deleteUser(id);
  resp.subscribe((data)=>this.users1=data);
 } */
     
     
    

}
