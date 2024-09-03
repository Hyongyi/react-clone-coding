import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`
const H1 = styled.h1`
    color:${(props) => props.theme.textColor};
`

interface DummyProps{
    text:string;
    active?:boolean;
}

function Dummy({text, active = true}:DummyProps) {
    return <h1>{text}</h1>
}

function App() {
    const onClick = (event:React.FormEvent<HTMLButtonElement>) =>{
     
    }
  return (
    <Container>
        <Dummy active text="Hello" />
        <form>
        <button onClick={onClick}>click me</button>
        </form>
    </Container>
  );
}

export default App;
