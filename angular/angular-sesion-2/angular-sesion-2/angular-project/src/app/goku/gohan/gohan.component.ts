import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import techniques, { Technique } from '../../../../../techniques';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.scss']
})
export class GohanComponent implements OnInit {
  @Input() public techniquesLearn: Technique [] = [];
  @Output() public techniquesLearnedInfo: EventEmitter<Technique[]> = new EventEmitter<Technique[]>();
  @Output() public techniquesLearnedByVidelInfo: EventEmitter<Technique[]> = new EventEmitter<Technique[]>();

  public techniquesToVidel: Technique [] = [];
  public techniquesLearned: Technique[] = [];
  public techniquesLearnedByVidel: Technique[] = []

  constructor() { }

  ngOnInit(): void {
    this.techniquesToVidel = this.techniquesLearn.filter((technique) => {
      return technique.complexity === 'low';
    });
  }

  public learnTech(technique: Technique) {
    if (this.techniquesLearned.indexOf(technique) === -1) {
      this.techniquesLearned.push(technique);

      // Emitimos al padre el listado completo de técnicas aprendidas
      this.techniquesLearnedInfo.emit(this.techniquesLearned);
      }
    }

    public videlLearnedNewTech(technique: Technique) {
      if (!this.techniquesLearnedByVidel.includes(technique)) {
        this.techniquesLearnedByVidel.push(technique);
        this.techniquesLearnedByVidelInfo.emit(this.techniquesLearnedByVidel);
      }
    }

}
