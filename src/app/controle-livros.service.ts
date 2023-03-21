import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    {codigo: 1, codEditora: 1, titulo: "A Garota no Trem", resumo: "Rachel pega o trem para Londres todos os dias. Ela passa por uma casa onde morava com seu ex-marido, que agora está com a nova esposa. Rachel cria um mundo de fantasias em torno de um casal que ela vê numa casa vizinha e, um dia, vê algo chocante acontecer lá. No dia seguinte, a mulher desse casal está desaparecida, e Rachel teme ter testemunhado uma cena de crime.", autores: ['Paula Hawkins']},
    {codigo: 2, codEditora: 2, titulo: 'O Código Da Vinci', resumo: 'F professor de simbologia Robert Langdon é chamado para investigar o assassinato de um curador do museu do Louvre em Paris. O professor descobre que a vítima deixou pistas sobre um mistério que envolve o Priorado de Sião e a vida de Jesus Cristo.', autores: ['Dan Brown']},
    {codigo: 3, codEditora: 3, titulo: 'A Menina que Roubava Livros', resumo: 'A história se passa na Alemanha nazista e é narrada pela Morte. Liesel Meminger é uma jovem que vive em uma família adotiva e descobre o amor pelos livros roubando-os para ler. Ela passa a dividir a biblioteca secreta com Max, um judeu que os pais adotivos escondem em casa.', autores: ['Markus Zusak']}
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
