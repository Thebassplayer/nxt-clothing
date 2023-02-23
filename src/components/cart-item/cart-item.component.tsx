import React, { FC } from "react";

import { CartItemContainer, ItemDetails } from "./cart-item.styles";

import { CartItem as TcartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TcartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imgUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
