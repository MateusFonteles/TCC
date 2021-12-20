import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  numero: number = 1

  arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor() { }

  ngOnInit(): void {
  }

}
