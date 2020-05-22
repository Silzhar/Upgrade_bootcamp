import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  // @Input() public image: string = null;
  // @Input() public sectionName: string = 'Noticias';
  // @Input() public title: string = null;
  // @Input() public desciption: string = null;

  @Input() public config: InfoCardConfig = null;

  @Output() public tagClickedEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public sectionClicked() {
    alert('Clicado en sección.');
  }

  public titleClicked() {
    alert('Clicado en el título.');
  }

  public tagClickedCallback(tag: string){
    this.tagClickedEvent.emit(tag);
  }
}

export interface InfoCardConfig {
  sectionName: string;
  title: string;
  image: string;
  description: string;
  tags?: string[];

}
