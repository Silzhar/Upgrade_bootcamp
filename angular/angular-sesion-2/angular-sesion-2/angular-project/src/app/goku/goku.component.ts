import { Component } from '@angular/core';
// Importar la variable techniques y la interfaz Technique .
import techniques,{ Technique } from '../../../../techniques';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})

export class GokuComponent {

  public techniques: Technique [] = techniques;
  public techniquesToGohan: Technique [] = [];

  // Tecnicas aprendidas por Goku .
  public techniquesLearned: Technique[] = [];

  // Tecnicas aprendidas .
  public techniquesLearnedGohan: Technique [] = [];
  // Tecnicas aprendidas por Videl (nos las ha pasado Gohan)
  public techniquesLearnedByVidel: Technique[] = [];


  constructor() {
    // Filtrado de tecnicas para Gohan .
    techniques.forEach((technique) => {
      if(technique.complexity === 'low' || technique.complexity === 'medium') {
        this.techniquesToGohan.push(technique);
      }
    });
  }

  public learTech(technique: Technique){
    if(this.techniquesLearned.indexOf(technique) === -1){
      this.techniquesLearned.push(technique);
    }
  }

  // Aqui recibimos $event y lo nombramos como techniquesLearnedGohan
  public gohanLearnedNewTech(techLearnedByGohan: Technique[]) {
    this.techniquesLearnedGohan = techLearnedByGohan;
  }


  // Recibimos $event y lo nombramos como techLearnedByVidel
  public videlLearnedNewTech(techLearnedByVidel: Technique[]) {
    this.techniquesLearnedByVidel = techLearnedByVidel;
  }

}
