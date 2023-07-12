import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpAddEditService } from '../services/emp-add-edit.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

  empform: FormGroup;

  constructor(private _fb: FormBuilder ,
    private _empService: EmpAddEditService ,
    private _dialogref: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
      
    this.empform=this._fb.group({
      emp_id:'',
      name:'',
      email:'',
      age:'',
    });
  }
  ngOnInit(): void {
    this.empform.patchValue(this.data);
  }

  onFormSubmit(){
   if(this.empform.valid){
      if(this.data){
        this._empService.updateEmployee(this.data.emp_id,this.empform.value).subscribe({
          next: (val:any)=> {
            alert("Employee updated sucessfully");
            this._dialogref.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
        });
      } 
      else{
         this._empService.addEmployee(this.empform.value).subscribe({
         next: (val:any)=> {
          alert("Employee added sucessfully");
          this._dialogref.close(true);
           },
          error:(err:any)=>{
          console.error(err);
          }
        });
      }
      console.log(this.empform.value);
   }
 }
}
