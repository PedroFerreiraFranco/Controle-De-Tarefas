 class Tarefa{
 constructor(descricao, prioridade, data, hora) {
      this._descricao = descricao;
      this._prioridade = prioridade;
      this._data = data;
      this._hora = hora;
    }
  
    get descricao() {
        return this._descricao;
    }

    set descricao(novaDescricao) {
        if (novaDescricao.length < 3) {
            console.log("Deve ter pelo menos 3 caracteres.");
            throw new Error("Deve ter pelo menos 3 caracteres.");
          }
        this._descricao = novaDescricao;
    }

    get prioridade() {
        return this._prioridade;
    }

    set prioridade(prioridade) {
        this._prioridade = prioridade;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get hora() {
        return this._hora;
    }

    set hora(hora) {
        this._hora = hora;
    }


    toString() {
        return `Descrição: ${this._descricao} - Prioridade: ${this._prioridade} - Data: ${this._data} - Hora: ${this._hora}`;
      }
}
  