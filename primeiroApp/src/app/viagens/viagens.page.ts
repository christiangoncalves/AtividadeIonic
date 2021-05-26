import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  public Viagens = [
    { local: 'local1', descricao: 'um local legal', data: 'hoje', imagem: "https://ionicframework.com/docs/demos/api/card/madison.jpg" },
    { local: 'local2', descricao: 'um local legal tambem', data: 'ontem', imagem: "https://ionicframework.com/docs/demos/api/card/madison.jpg" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
