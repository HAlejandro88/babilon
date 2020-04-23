import { NosotrosService } from './../../services/nosotros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.page.html',
  styleUrls: ['./auxiliar.page.scss'],
})
export class AuxiliarPage implements OnInit {

  id = null;
  producto: any = {};

  constructor(private router: ActivatedRoute, private _nostrosService: NosotrosService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('custom_id');
    this.guitarEspecific();
  }

  guitarEspecific() {
    this._nostrosService.traerProductoEspecifico(this.id).subscribe((data: any) => {
      this.producto = data.productoE;
      console.log(this.producto);
    });
  }

}
