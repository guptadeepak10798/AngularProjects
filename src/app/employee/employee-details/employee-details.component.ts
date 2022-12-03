import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/http-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  // [x: string]: any;

  employee: any= [];
  id: any;
  //route: any;

  constructor(private employeeService : HttpServiceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
   
      this.id = this.route.snapshot.params['id'];
      // this.employee = new Employee();
      this.employeeService.getEmployeeById(this.id).subscribe((data: any)=>{
        this.employee = data;
        console.log("get Employee by ID",this.employee );
        
      })
    }   
  }

 

