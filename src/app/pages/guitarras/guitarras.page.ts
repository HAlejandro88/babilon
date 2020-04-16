import { NosotrosService } from './../../services/nosotros.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.page.html',
  styleUrls: ['./guitarras.page.scss'],
})
export class GuitarrasPage implements OnInit {

  guitarras: any[] = [];

  constructor(private nosotrosService: NosotrosService, private navCtrl: NavController) {
    this.traerGuitarras();
  }

  ngOnInit() {
  }

  traerGuitarras() {
    this.nosotrosService.traerProductos().subscribe((guitarra: any) => {
      this.guitarras = guitarra.productoG;
      console.log(this.guitarras, 'guitars');
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
