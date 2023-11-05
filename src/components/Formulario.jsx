import React from 'react';

function Formulario(props) {
  return (
    <form onSubmit={props.adicionar}>
      <input
        name="nome"
        value={props.produto.nome}
        placeholder="Nome"
        onChange={props.captar}
      />
      <br />
      <input
        name="preco"
        value={props.produto.preco}
        placeholder="Preço"
        onChange={props.captar}
      />
      <br />
      <input
        name="quantidade"
        value={props.produto.quantidade}
        placeholder="Quantidade"
        onChange={props.captar}
      />
      <br />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Formulario;
