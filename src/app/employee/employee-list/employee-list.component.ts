import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/http-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  listOfEmployees: any=[];
  constructor(private employeeService : HttpServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeAllList();
    
  }

  getEmployeeAllList(){
    this.employeeService.getEmployeesList().subscribe(res=>{
     this.listOfEmployees=res;
     console.log("rsp======",res); 
    })
  }

  employeeDetails(id : number){
    this.router.navigate(['employee-details',id]);
    console.log("idd",id);
    
  }

}
