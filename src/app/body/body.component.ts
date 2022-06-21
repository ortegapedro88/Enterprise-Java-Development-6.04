import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  backCol : string ="#026969";
  backCol1 : string ="#97040D";
  backCol2 : string ="#B300A6";
  color : string = "#A61F6A";
  color1 : string = "#005A00";
  color2 : string = "#A63D00";
  isColorblindMode : boolean = false;
  buttonText : string = "Colorblind Mode"
  hoverBoolean : boolean = false;
  backupCol : string = "";
  constructor() { }

  ngOnInit(): void {
  }


 hover(){
  this.hoverBoolean = !this.hoverBoolean;
  
  if(this.hoverBoolean){

    this.backupCol = this.backCol;
    this.backCol = this.color;
    this.color = this.backupCol;

  }else{
    this.backupCol = this.backCol;
    this.backCol = this.color;
    this.color = this.backupCol;
  }
 }
 hover1(){
  this.hoverBoolean = !this.hoverBoolean;

  if(this.hoverBoolean){

    this.backupCol = this.backCol1;
    this.backCol1 = this.color1;
    this.color1 = this.backupCol;

  }else{
    this.backupCol = this.backCol1;
    this.backCol1 = this.color1;
    this.color1 = this.backupCol;
  }
 }
 hover2(){
  this.hoverBoolean = !this.hoverBoolean;

  if(this.hoverBoolean){

    this.backupCol = this.backCol2;
    this.backCol2 = this.color2;
    this.color2 = this.backupCol;

  }else{
    this.backupCol = this.backCol2;
    this.backCol2 = this.color2;
    this.color2 = this.backupCol;
  }
 }



  colorblindMode(){

     this.isColorblindMode = !this.isColorblindMode;

    if(this.isColorblindMode){
      this.backCol="black";
      this.backCol1 ="red";
      this.backCol2  ="blue";
      this.color  = "white";
      this.color1  = "white";
      this.color2 = "white";
      this.buttonText = "Normal mode"
      
    }else{
      this.backCol ="#026969";
      this.backCol1 ="#97040D";
      this.backCol2 ="#B300A6";
      this.color = "#A61F6A";
      this.color1 = "#005A00";
      this.color2 = "#A63D00";
      this.buttonText = "Colorblind Mode"
    }
  }

}
