import { Component } from '@angular/core';
import { InfoCardConfig } from './info-cards-module/info-card/info-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userInterests: string[] = [];

  public configForCardOne: InfoCardConfig = {
    sectionName: 'Noticias',
    title: 'Titulo de la noticia 1',
    image: 'https://cdns3.eltiempo.es/eltiempo/feed/noticias/80045/que-ha-significado-para-nuestro-clima-esta-pandemia_THF.jpg',
    description: 'Esta es la descripción de la noticia 1'
  };

  public configForCardTwo: InfoCardConfig = {
    sectionName: 'Noticias',
    title: 'Titulo de la noticia 2',
    image: 'https://cdns3.eltiempo.es/eltiempo/feed/noticias/79886/movilidad-sostenible-cual-es-la-opcion-de-transporte-mas-segura-y-eficiente-tras-la-pandemia_THF.jpg',
    description: 'Esta es la descripción de la noticia 2'
  };

  public configForCardThree: InfoCardConfig = {
    sectionName: 'Noticias',
    title: 'Titulo de la noticia 3',
    image: 'https://cdns3.eltiempo.es/eltiempo/feed/noticias/79938/el-boom-de-las-energias-renovables-tras-la-era-coronavirus_THF.jpg',
    description: 'Esta es la descripción de la noticia 3',
    tags: ['Futbol', 'Deportes', 'Messi', 'Barcelona', 'Partido', 'Amarilla', 'Árbitro']
  };

  public configForCardFour: InfoCardConfig = {
    sectionName: 'Noticias',
    title: 'Titulo de la última noticia',
    image: 'https://cdns3.eltiempo.es/eltiempo/feed/noticias/80094/como-proteger-a-los-ninos-si-tienen-alergia-al-sol_THF.jpg',
    description: 'Esta es la descripción de la noticia 4'
  };

  constructor(){
  }

  public userClickedOnTag(tag: string) {
    this.userInterests.push(tag);
  }
}
