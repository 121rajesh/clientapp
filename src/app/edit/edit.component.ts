import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  S_No;
  emps;
  message:any;
  constructor(public routes:ActivatedRoute, public router:Router, public service:DataService)
  { 
    let parameterArrivalStatus =this.routes.paramMap;
    parameterArrivalStatus.subscribe((params)=>{
      this.S_No = params.get("S_No");
    //  alert(this.No);
    
     let statusOfEmpSearched =this.service.GetDataById(this.S_No);
     statusOfEmpSearched.subscribe((response:any)=>{
      this.emps = response;
      console.log(this.emps.name);

      
    });
  });
  }

  ngOnInit() {
  }
  // Update()
  // {
    // let statusOfUpdate= this.service.UpdateData(this.emp);
    // statusOfUpdate.subscribe((result:any)=>{
    //   //console.log(result);
    //   if(result.affectedRows>0)
    //   {
    //     this.router.navigate(['home']);
    //   }
    //   else{
    //     this.message = "Something went wrong!";
    //   }
    //});
  // }
}