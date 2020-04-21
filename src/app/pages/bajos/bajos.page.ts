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

  constructor(private navCtrl: NavController, private nosotrosService: NosotrosService) { 
   this.traerBajos();
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

  traerBajos() {
    this.nosotrosService.traerProductos().subscribe((data: any) => {
      this.bajos = data.productoG;
      console.log(this.bajos);
    });
  }

  verMas() {}

}
