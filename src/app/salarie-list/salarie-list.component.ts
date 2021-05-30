import { SalarieeService } from './../salariee.service';
import { Salariee } from './../salariee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-salarie-list',
  templateUrl: './salarie-list.component.html',
  styleUrls: ['./salarie-list.component.css']
})
export class SalarieListComponent implements OnInit {
public salariees: Salariee[];
  constructor( private salarieeService: SalarieeService) { }

  ngOnInit() {
    this.getSalariees();
  }
 public getSalariees(): void{
   this.salarieeService.getSalariees().subscribe(
     (response: Salariee[])=> {
       this.salariees = response
     },
     (error: HttpErrorResponse)=>{
       alert(error.message)
     }
   )
 }
 public onAddSalariee(addForm: NgForm ): void{
   document.getElementById('add-salariee-form').click();
   this.salarieeService.addSalariee(addForm.value).subscribe(
     (response: Salariee)=>{
       console.log(response);
       this.getSalariees();
     },
     (error:HttpErrorResponse)=>{
       alert(error.message);
     }
   )
 }
 public onOpenModal(salariee: Salariee, mode: string): void{
   const container = document.getElementById('main-container');
     const button = document.createElement('button');
   button.type = 'button';
   button.style.display = "none";
   button.setAttribute('data-toggle', 'modal');
   if (mode === 'add'){
    button.setAttribute('data-target', '#addSalarieeModal');

   }
   if (mode === 'edit'){
    button.setAttribute('data-target', '#updateSalarieeModal');

   }
   if (mode === 'delete'){
    button.setAttribute('data-target', '#deleteSalarieeModal');

   }
   container.appendChild(button);
   button.click();


 }
}
