import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  id : number;
 users1:any;
 users2:any;
 firstName:string;
 searchValue:string;

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
    data => this.users1 = this.filterUsers(data))
  
        
}

listUsers1() {
  this.service.getUsersList().subscribe(
    data => this.users1 = this.filterUsers1(data)
  )
}

filterUsers(users2: User[]) {
  return users2.filter((e) => {return(
     e.firstName.toLowerCase().includes(this.filters.keyword.toLowerCase())||
     e.lastName.toLowerCase().includes(this.filters.keyword.toLowerCase())||
     e.city.toLowerCase().includes(this.filters.keyword.toLowerCase()))

  })
}

filterUsers1(users3: User[]) {
  return users3.filter((e) => {
    return e.lastName.toLowerCase().includes(this.filters.keyword.toLowerCase());
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