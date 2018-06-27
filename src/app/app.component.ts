import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { mMenu } from '../models/mOpciones';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  private listaMenu: Array<mMenu>;
  private tituloPagina: string = 'Inicio';
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen) {

    this.initializeApp();

    this.listaMenu = [
      {
        Nombre: 'Inicio',
        Colapsa: false,
        Componente: true,
        Opciones: [
          { Titulo: 'Inicio', Page: HomePage }]
      },
      {
        Nombre: 'Registraduría',
        Colapsa: true,
        Componente: false,
        Opciones: [
          { Titulo: 'Cédula de Ciudadanía', Page: null },
          { Titulo: 'Tarjeta de Identidad', Page: null }
        ]
      },
      {
        Nombre: 'Calificame',
        Colapsa: false,
        Componente: true,
        Opciones: [
          { Titulo: 'Calificame', Page: null }]
      }
    ];
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  private openPage(page) {

    this.nav.setRoot(page.Componente);
    this.tituloPagina = page.Titulo;
  }

  private mostrarOpciones(_menu: mMenu) {
    this.listaMenu.filter(x => x === _menu)[0].Colapsa = !_menu.Colapsa;
  }
}
