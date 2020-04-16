import { NosotrosService } from '../../services/nosotros.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ultimos: any[] = [];
  nuevo: any[] = [];

  product1 = '5e9733eeb09afa1e20d5087f';
  product2 = '5e97341ab09afa1e20d50880';
  product3 = '5e973456b09afa1e20d50881';
  product4 = '5e97349fb09afa1e20d50882';
  product5 = '5e973765ad2da61f31f9e731';

  cuerda1 = '5e987c60b2edb34108f496f4';
  cuerda2 = '5e987c8bb2edb34108f496f5';
  cuerda3 = '5e987c9ab2edb34108f496f6';
  cuerda4 = '5e987ca9b2edb34108f496f7';

  nosotros: any = {};
  id = '5e973a82ad2da61f31f9e735';

  constructor(private nosotrosService: NosotrosService, private navCtrl: NavController) {
    this.traerNosotros();
    this.traerProductoUno();
    this.traerProducto2();
    this.traerProducto3();
    this.traerProducto4();
    this.traerProducto5();
    this.traerCuerda1();
    this.traerCuerda2();
    this.traerCuerda3();
    this.traerCuerda4();
  }

  traerNosotros() {
    this.nosotrosService.getNosotros(this.id).subscribe((data: any) => {
      this.nosotros = data.nosE; console.log(this.nosotros); });
  }

  traerProductoUno() {
    this.nosotrosService.traerProductoEspecifico(this.product1).subscribe((data: any) => {
      this.product1 = data.productoE;
      this.ultimos.push(this.product1);
    });
  }
  traerProducto2() {
    this.nosotrosService.traerProductoEspecifico(this.product2).subscribe((data: any) => {
      this.product2 = data.productoE;
      this.ultimos.push(this.product2);
    });
  }

  traerProducto3() {
    this.nosotrosService.traerProductoEspecifico(this.product3).subscribe((data: any) => {
      this.product3 = data.productoE;
      this.ultimos.push(this.product3);
    });
  }

  traerProducto4() {
    this.nosotrosService.traerProductoEspecifico(this.product4).subscribe((data: any) => {
      this.product4 = data.productoE;
      this.ultimos.push(this.product4);
      console.log(this.ultimos);
    });
  }

  traerProducto5() {
    this.nosotrosService.traerProductoEspecifico(this.product5).subscribe((data: any) => {
      this.product5 = data.productoE;
    });
  }

  traerCuerda1() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda1 = cuerda.productoE;
      this.nuevo.push(this.cuerda1);
    });
  }

  traerCuerda2() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda2 = cuerda.productoE;
      this.nuevo.push(this.cuerda2);
    });
  }

  traerCuerda3() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda3 = cuerda.productoE;
      this.nuevo.push(this.cuerda3);
    });
  }

  traerCuerda4() {
    this.nosotrosService.traerProductoEspecifico(this.cuerda1).subscribe((cuerda: any) => {
      this.cuerda4 = cuerda.productoE;
      this.nuevo.push(this.cuerda4);
      console.log(this.nuevo);
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

}
