import { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export default function SelectApp() {
  const [selectedOption, setSelectedOption] = useState({
    value: '리액트',
    label: '리액트',
  });
  const options = [
    { value: '리액트', label: '리액트' },
    { value: '자바', label: '자바' },
    { value: '스프링', label: '스프링' },
    { value: '리액트네이티브', label: '리액트네이티브' },
  ];
  return (
    <StWrap>
      <StContainer>
        <StTitle>Select</StTitle>
        <StSelectRow>
          <StSelect1
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          <StSelect2
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </StSelectRow>
      </StContainer>
    </StWrap>
  );
}

const StWrap = styled.div`
  position: relative;
`;
const StContainer = styled.div`
  border: 2px solid #c4c4c4;
  margin: 8px;
  width: 90%;
  height: 200px;
  margin-top: 24px;
  overflow: hidden;
`;

const StSelect1 = styled(Select)`
  width: 280px;
  font-size: 13px;
  position: absolute;
`;

const StSelect2 = styled(Select)`
  width: 280px;
  font-size: 13px;
  position: relative;
`;

const StSelectRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StTitle = styled.h1`
  font-size: 35px;
  font-weight: 600;
  margin: 20px 0px;
`;
