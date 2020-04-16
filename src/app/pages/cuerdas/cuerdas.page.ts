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

  cuerda1 = '5e987c60b2edb34108f496f4';
  cuerda2 = '5e987c8bb2edb34108f496f5';
  cuerda3 = '5e987c9ab2edb34108f496f6';
  cuerda4 = '5e987ca9b2edb34108f496f7';

  constructor(private nosotrosService: NosotrosService, private navCtrl: NavController) { 
    this.traerCuerda1();
    this.traerCuerda2();
    this.traerCuerda3();
    this.traerCuerda4();
  }

  ngOnInit() {
  }

  traerCuerda1() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda1 = cuerda.productoE;
      this.cuerdas.push(this.cuerda1);
    });
  }

  traerCuerda2() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda2 = cuerda.productoE;
      this.cuerdas.push(this.cuerda2);
    });
  }

  traerCuerda3() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda3 = cuerda.productoE;
      this.cuerdas.push(this.cuerda3);
    });
  }

  traerCuerda4() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda4 = cuerda.productoE;
      this.cuerdas.push(this.cuerda4);
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
