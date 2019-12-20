import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, Message } from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  if (cart.length > 0) {
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
            {cart.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>

                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>

                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>

                    <input type="number" readOnly value={product.amount} />

                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>

                <td>
                  <strong>{product.subtotal}</strong>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <MdDelete size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    );
  }

  return (
    <Container>
      <Message>Nenhum produto no Carrinho!</Message>

      <footer>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </footer>
    </Container>
  );
}
