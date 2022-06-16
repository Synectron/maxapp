import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {
  toogle:boolean=true;
  minimize= {height:'1.5rem',position:'fixed',bottom:0,overflow:'hidden'}
  maximize={height:'100vh'}

  constructor() { }

  ngOnInit(): void {
  }

}
