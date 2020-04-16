import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(public http: HttpClient) { }

  getNosotros(id) {//5e973a82ad2da61f31f9e735
    return this.http.get(`${URL}/nosotros/${id}`);
  }

  traerProductoEspecifico(id) {
    return this.http.get(`${URL}/productos/${id}`);
  }

  traerProductos() {
    return this.http.get(`${URL}/productos`);
  }
}
