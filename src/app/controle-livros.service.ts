import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    {codigo: 1, codEditora: 1, titulo: 'O Senhor dos Anéis', resumo: 'Fantasia épica', autores: ['J.R.R. Tolkien']},
    {codigo: 2, codEditora: 2, titulo: 'Harry Potter e a Pedra Filosofal', resumo: 'Fantasia infantojuvenil', autores: ['J.K. Rowling']},
    {codigo: 3, codEditora: 3, titulo: 'O Pequeno Príncipe', resumo: 'Livro infantil', autores: ['Antoine de Saint-Exupéry']}
  ];

  constructor() { }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
