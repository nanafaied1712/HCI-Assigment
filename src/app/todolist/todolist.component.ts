import { Component,NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  arrayRowIndex:number=0;
  showbutton:boolean=true;
  Title:string='';
  Describtion:string='';
  Date:string='';
  Array=[{Title :'Study',Describtion:'GP project',Date:'2024-03-20'}]
  Add(form : NgForm){
    this.Array.push({
      Title: form.controls['Title'].value,
      Describtion: form.controls['Describtion'].value,
      Date: form.controls['Date'].value
    })
  }
  Delete(index:number){
    this.Array.splice(index,1);
  }
  Edit(index:number,form:NgForm){
   this.showbutton=false;
   const element=this.Array[index];
   this.Title=element.Title;
   this.Describtion=element.Describtion;
   this.Date=element.Date;
   this.arrayRowIndex=index;
  }
  showButton():boolean{
    return this.showbutton;
  }
  Update(){
    this.showbutton=true;
    this.Array[this.arrayRowIndex].Title=this.Title;
    this.Array[this.arrayRowIndex].Describtion=this.Describtion;
    this.Array[this.arrayRowIndex].Date=this.Date;
  }
}
