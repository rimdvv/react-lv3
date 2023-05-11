import { useState } from 'react';
import styled from 'styled-components';

export default function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changePriceHandler = (event) => {
    const value = event.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));
    setPrice(removedCommaValue.toLocaleString());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price.trim() === '') {
      return;
    }
    alert(`{ name: ${name}, price: ${price.replaceAll(',', '')} }`);
  };

  return (
    <>
      <StForm onSubmit={onSubmitHandler}>
        <label htmlFor='name'>이름</label>
        <StInputBox
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={changeNameHandler}
        />
        <label htmlFor='price'>가격</label>
        <StInputBox
          type='text'
          name='price'
          id='price'
          value={price}
          onChange={changePriceHandler}
        />
        <StBtn>저장</StBtn>
      </StForm>
    </>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 1007px;
  height: 62px;
  margin-left: 8px;
`;

const StInputBox = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px;
  width: 240px;
  height: 24px;
  border: 1px solid black;
  border-radius: 12px;
`;

const StBtn = styled.button`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  width: 111px;
  height: 46px;
  background: #54efc3;
  border-radius: 12px;
  border-style: none;
  color: black;
`;
