import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-base-conocimiento',
  templateUrl: './base-conocimiento.component.html',
  styleUrls: ['./base-conocimiento.component.css']
})
export class BaseConocimientoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  baseConocimiento() {
    $('#modalBaseConocimiento').modal('show');
  }

}
