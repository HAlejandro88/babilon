import { NosotrosService } from './../../services/nosotros.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bajos',
  templateUrl: './bajos.page.html',
  styleUrls: ['./bajos.page.scss'],
})
export class BajosPage implements OnInit {

  bajos: any[] = [];

  bajo1 = '5e989a4bb2edb34108f496f8';
  bajo2 = '5e989a98b2edb34108f496f9';

  constructor(private navCtrl: NavController, private nosotrosService: NosotrosService) { 
    this.traerBajo1();
    this.traerBajo2();
  }

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

  traerBajo1() {
    this.nosotrosService.traerProductoEspecifico(this.bajo1).subscribe((bajo: any) => {
      this.bajo1 = bajo.productoE;
      this.bajos.push(this.bajo1);
    });
  }

  traerBajo2() {
    this.nosotrosService.traerProductoEspecifico(this.bajo2).subscribe((bajo: any) => {
      this.bajo2 = bajo.productoE;
      this.bajos.push(this.bajo2);
    });
  }

  verMas() {}

}
