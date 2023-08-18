import React from 'react';
import styled from "styled-components";
// import sprite from "../src/images/sprite.svg";
import {Button} from "./components/Button"
import {MyTheme} from "./styled/ThemeStyles";

function App() {

    return (
        <Wrapper>
            <Button btnBack={"primary"} color={MyTheme.colors.secondary} iconId={"airplane"}></Button>
            <Button btnBack={"secondary"} color={MyTheme.colors.third} iconId={"car"}></Button>
            <Button btnBack={"third"} color={MyTheme.colors.four} iconId={"bus"}></Button>
        </Wrapper>
    );
}

export default App;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`