import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: "Companhia das Letras" },
    { codEditora: 2, nome: "Record" },
    { codEditora: 3, nome: "Intrínseca" }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
