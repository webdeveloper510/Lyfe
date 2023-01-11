import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyfe',
  templateUrl: './lyfe.component.html',
  styleUrls: ['./lyfe.component.scss'],
})
export class LyfeComponent implements OnInit {
  lyfeServices = [
    {
      title: 'GP',
      src: 'assets/img/booklyfe/stethoscope.png',
    },
    {
      title: 'Physio',
      src: 'assets/img/booklyfe/physio.png',
    },
    {
      title: 'Psychologist',
      src: 'assets/img/booklyfe/psychology.png',
    },
    {
      title: 'Dentist',
      src: 'assets/img/booklyfe/dentist.png',
    },
    {
      title: 'Chiropractor',
      src: 'assets/img/booklyfe/chiropter.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
