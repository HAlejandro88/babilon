import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ukuleles',
  templateUrl: './ukuleles.page.html',
  styleUrls: ['./ukuleles.page.scss'],
})
export class UkulelesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  goPrincipal() {
    this.navCtrl.navigateForward('/home');
  }

  goGuitarras() {
    this.navCtrl.navigateForward('/guitarras');
  }

  goBajos() {
    this.navCtrl.navigateForward('/bajos');
  }

  goCuerdas() {
    this.navCtrl.navigateForward('/cuerdas');
  }

  goUkuleles() {
    this.navCtrl.navigateForward('/ukuleles');
  }

}
