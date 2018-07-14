import { Producto } from './../../../models/producto';
import { ProductoService } from './../../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.leerProductos().snapshotChanges().subscribe(item => {
      this.productos = [];
      item.forEach(element => {
        let productoLeido: Producto;
        productoLeido = element.payload.toJSON() as Producto;
        productoLeido.id = element.key;
        this.productos.push(productoLeido as Producto);
      });
    });
  }

  editar(producto: Producto) {
    this.productoService.productoSeleccionado = Object.assign({}, producto);
  }

  borrar(producto: Producto) {
    this.productoService.borrarProducto(producto.id);
    this.productoService.productoSeleccionado = new Producto();
  }
}
