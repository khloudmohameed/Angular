import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {
 
skillist=[1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
