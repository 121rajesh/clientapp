import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees;
  message;
  constructor(public router: Router,public service: DataService) 
  {
    this.GetData();
  }

  GetData()
  {
    let StateOfResult = this.service.GetData();

    StateOfResult.subscribe((result)=>{
      this.employees = result;
    });
  }
  ngOnInit() 
  {
   // let StateOfResult:any;
    
    
    // this.employees =[
    //   {no: 11, name: "Rajesh", address: "Indore"},
    //   {no: 12, name: "Shreyas", address: "Raigad"},
    //   {no: 13, name: "Akash", address: "Nagar"},
    //   {no: 14, name: "Swapnil", address: "Nagpur"},
    // ];
  }

  GoToRegister()
  {
    this.router.navigate(['register']);
  }

  Delete(empNo:any)
  {
    //alert(empNo);
    let StateOfDelete = this.service.DeleteData(empNo);
    console.log(StateOfDelete);
    StateOfDelete.subscribe((result:any)=>{
      if(result.affectedRow >0)
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.message = "Something went wrong!!";
      }
      this.GetData(); 
    });
    
    // Update()
    // {
      
    // }
    
  }
}
