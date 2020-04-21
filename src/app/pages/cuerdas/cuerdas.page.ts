import { NosotrosService } from './../../services/nosotros.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuerdas',
  templateUrl: './cuerdas.page.html',
  styleUrls: ['./cuerdas.page.scss'],
})
export class CuerdasPage implements OnInit {

  cuerdas: any[] = [];


  constructor(private nosotrosService: NosotrosService, private navCtrl: NavController) { 
    this.traerCuerdas();
  }

  ngOnInit() {
  }

  traerCuerdas() {
    this.nosotrosService.traerProductos().subscribe((data: any) => {
      this.cuerdas = data.productoG;
      console.log(this.cuerdas);
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
