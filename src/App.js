import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import Select from './Select';

function App() {
  return (
    <div>
      <StTitle>Button</StTitle>
      <Button />
      <StTitle>Input</StTitle>
      <Input />
      <StTitle>Modal</StTitle>
      <Modal />
      <Select />
    </div>
  );
}

export default App;

const StTitle = styled.h1`
  font-size: 35px;
  font-weight: 600;
  margin: 24px 8px;
`;
