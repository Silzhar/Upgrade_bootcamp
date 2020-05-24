import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from '../../../../../../techniques';

@Component({
  selector: 'app-videl',
  templateUrl: './videl.component.html',
  styleUrls: ['./videl.component.scss']
})
export class VidelComponent implements OnInit {
  @Input() public techniquesLearn: Technique [] = [];

  @Output() public newTechniqueLearnedInfo: EventEmitter<Technique> = new EventEmitter<Technique>();

  public techniquesLearned: Technique[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public learnTech(technique: Technique){
    if (!this.techniquesLearned.includes(technique)) {
      this.techniquesLearned.push(technique);

      // Notifico a mi padre que he aprendido una tecnica
      this.newTechniqueLearnedInfo.emit(technique);
    }
  }

}
