import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>IMAGEM</th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th>EXCLUIR</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-olympikus-attitude-576/88/D22-3009-088/D22-3009-088_detalhe2.jpg?ims=326x"
                alt="Tênis"
              />
            </td>

            <td>
              <strong>Tênis muito legal</strong>
              <span>R$ 129,90</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>

                <input type="number" readOnly value={2} />

                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$ 259,80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}
