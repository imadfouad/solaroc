import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pompes',
  templateUrl: './pompes.component.html',
  styleUrls: ['./pompes.component.css']
})
export class PompesComponent implements OnInit {

  constructor() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

  ngOnInit(): void {
  }

}
