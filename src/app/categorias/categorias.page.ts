import { Component } from '@angular/core';
import { CategoriaService } from '../services/domain/categoria.service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(public categoriaService : CategoriaService) { }

  ngOnInit() {
    // callback com função anônima
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
    },
    error => {});
  }
}
