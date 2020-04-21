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

  product1 = '5e9f0d9dac9a620495e08c33';
  product2 = '5e9f0dc2ac9a620495e08c34';
  product3 = '5e9f0deeac9a620495e08c35';
  product4 = '5e9f0e14ac9a620495e08c36';

  nosotros: any = {};
  id = '5e9f0955ac9a620495e08c2a';

  constructor(private _nosotrosService: NosotrosService, private navCtrl: NavController) {
    this.traerNosotros();
    this.traerNuevo();
    this.traerUltimo1();
    this.traerUltimo2();
    this.traerUltimo3();
    this.traerUltimo4();
  }

  traerNosotros() {
    this._nosotrosService.getNosotros(this.id).subscribe((data: any) => {
      this.nosotros = data.marcaE;
      console.log(this.nosotros);
    });
  }

  traerNuevo() {
    this._nosotrosService.traerProductos().subscribe((data: any) => this.nuevo = data.productoG);
  }

  traerUltimo1() {
    this._nosotrosService.traerProductoEspecifico(this.product1).subscribe((data: any) => {
      this.product1 = data.productoE;
      this.ultimos.push(this.product1);
    });
  }

  traerUltimo2() {
    this._nosotrosService.traerProductoEspecifico(this.product2).subscribe((data: any) => {
      this.product2 = data.productoE;
      this.ultimos.push(this.product2);
    });
  }

  traerUltimo3() {
    this._nosotrosService.traerProductoEspecifico(this.product3).subscribe((data: any) => {
      this.product3 = data.productoE;
      this.ultimos.push(this.product3);
    });
  }

  traerUltimo4() {
    this._nosotrosService.traerProductoEspecifico(this.product4).subscribe((data: any) => {
      this.product4 = data.productoE;
      this.ultimos.push(this.product4);
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
