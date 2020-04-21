import { NosotrosService } from './../../services/nosotros.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ukuleles',
  templateUrl: './ukuleles.page.html',
  styleUrls: ['./ukuleles.page.scss'],
})
export class UkulelesPage implements OnInit {

  ukuleles: any[] = [];

  constructor(private navCtrl: NavController, private _nosotrosService: NosotrosService) { 
    this.traerUkuleles();
  }

  ngOnInit() {
  }


  traerUkuleles() {
    this._nosotrosService.traerProductos().subscribe((data: any) => {
      this.ukuleles = data.productoG;
      console.log(this.ukuleles);
    });
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

  verMas() {}

}
