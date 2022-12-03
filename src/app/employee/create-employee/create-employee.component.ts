import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/http-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee : any;
  constructor(private httpService : HttpServiceService,
    private router: Router ) { }

  ngOnInit(): void {
  }

//   saveEmployee(){
//     this.httpService.createEmployee(this.employee).subscribe(
//       data =>{
//         console.log("saveEmployee==>>"+data); 
//         this.gotoEmployeeList(); 
//     },
//     error => console.log(error));
// }

// gotoEmployeeList(){
//   this.router.navigate(['/employees']);
// }

}
