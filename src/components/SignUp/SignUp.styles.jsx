import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 900px) {
    width: 320px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpButton = styled(CustomButton)`
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
