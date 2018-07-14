import { ProductoService } from './../../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit() {
    this.reset();
    this.productoService.leerProductos();
  }

  aceptar() {
    if (this.productoService.productoSeleccionado.id == null) {
      this.productoService.crearProducto();
    } else {
      this.productoService.actualizarProducto();
    }
    this.reset();
  }

  reset() {
    this.productoService.productoSeleccionado = new Producto();
  }
}
