import styled from "styled-components";

import Logo from "../../assets/ShoppingBag.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled.img.attrs({
  src: `${Logo}`,
})`
  width: 50px;
  height: 30px;
`;
export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
