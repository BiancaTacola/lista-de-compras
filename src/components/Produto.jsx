import React from 'react';

function Produto(props) {
  let subtotal = props.preco * props.quantidade;

  return (
    <tr>
      <td>{props.nome}</td>
      <td>{Number(props.preco).toFixed(2)}</td>
      <td>{Number(props.quantidade).toFixed(2)}</td>
      <td>{Number(subtotal).toFixed(2)}</td>
      <td>
        <button onClick={props.deletar}>Deletar</button>
      </td>
    </tr>
  );
}

export default Produto;
