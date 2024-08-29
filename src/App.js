import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const Input_test = styled(Input).attrs((props) => ({
  id: props.id,
}))`
  background-color: white;
`;

function App() {
  return (
    <Father>
      <Input as="button" />
      <Input_test id="300" />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
