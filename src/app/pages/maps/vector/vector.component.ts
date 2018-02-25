import { Component, OnInit } from '@angular/core';
import '../../../../assets/jq-vmap/jquery.vmap.js';
import '../../../../assets/jq-vmap/maps/jquery.vmap.world.js';
declare const $: any;

@Component({
  selector: 'ngx-vector',
  templateUrl: './vector.component.html',
  styleUrls: [
    './vector.component.css',
    '../../../../assets/jq-vmap/jqvmap.css',
  ],
})
export class VectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#vmap').vectorMap({
      map: 'world_en',
      backgroundColor: '#eeeeee',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      scaleColors: ['#967adc', '#ff5252'],
      normalizeFunction: 'polynomial',
    });
  }

}
