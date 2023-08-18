import styled, {css} from "styled-components";
import sprite from "../images/sprite.svg";
import React from "react";

type ButtonPropsType = {
    color?: string,
    iconId?: string,
    btnBack: "primary" | "secondary" | "third"
}

export const Button = (props: ButtonPropsType) => {
    return (
        <ButtonStyle color={props.color} btnBack={props.btnBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${sprite}#${props.iconId}`}/>
            </svg>
        </ButtonStyle>
    )
}

export const ButtonStyle = styled.button<ButtonPropsType>`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s ease;
  ${props => props.btnBack === 'primary' && css<ButtonPropsType>`
    background-color: ${props => props.color};
    &:hover {
      background-color: rgba(44, 44, 44, 0.8);
    }
  `};
  ${props => props.btnBack === 'secondary' && css<ButtonPropsType>`
    background-color: ${props => props.color};
    &:hover {
      background-color: rgb(75, 206, 178);
    }
  `};
  ${props => props.btnBack === 'third' && css<ButtonPropsType>`
    background-color: ${props => props.color};
    &:hover {
      background-color: rgb(167, 87, 224);
    }
  `};

  &:hover svg {
    stroke: rgba(0, 0, 0, 1);
  }

  svg {
    stroke: #fff;
    transition: 0.5s ease;
  }
`