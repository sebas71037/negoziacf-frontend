import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.sass']
})
export class SimpleLoaderComponent implements OnInit {

  loader = false;

  constructor() { }

  ngOnInit() {}

}
